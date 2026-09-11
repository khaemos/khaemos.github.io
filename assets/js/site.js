
const data = window.KHAE_DATA;

function bySlug(items, slug){ return items.find(x => x.slug === slug); }

function domainCard(d, index){
  return `
    <a class="domain-card" href="domain.html?slug=${d.slug}">
      <div class="domain-visual">
        <div class="domain-code">${String(index+1).padStart(2,'0')} / ${d.kicker}</div>
      </div>
      <div class="card-body">
        <div class="card-kicker">${d.kicker}</div>
        <h3>${d.title}</h3>
        <p>${d.description}</p>
      </div>
    </a>`;
}

function projectCard(p){
  return `
    <a class="project-card" href="project.html?slug=${p.slug}">
      <div class="project-media"></div>
      <div class="card-body">
        <div class="card-kicker">${p.year || ''} • ${p.status || ''}</div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="tags">${(p.tags||[]).slice(0,4).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </a>`;
}

function renderHome(){
  const dg = document.querySelector('#domain-grid');
  if(dg) dg.innerHTML = data.domains.map(domainCard).join('');
  const pg = document.querySelector('#featured-grid');
  if(pg) pg.innerHTML = data.projects.filter(p=>p.featured).slice(0,6).map(projectCard).join('');
}

function renderWork(){
  const grid = document.querySelector('#work-grid');
  if(grid) grid.innerHTML = data.domains.map(domainCard).join('');
}

function renderProjects(){
  const grid = document.querySelector('#projects-grid');
  const search = document.querySelector('#project-search');
  const filters = document.querySelector('#project-filters');
  let active = 'all';

  const draw = () => {
    const q = (search?.value || '').toLowerCase();
    const items = data.projects.filter(p=>{
      const domainOK = active==='all' || p.domain===active;
      const text = `${p.title} ${p.summary} ${(p.tags||[]).join(' ')}`.toLowerCase();
      return domainOK && text.includes(q);
    });
    grid.innerHTML = items.map(projectCard).join('');
  };

  if(filters){
    filters.innerHTML = `<button class="filter-btn active" data-domain="all">All</button>` +
      data.domains.map(d=>`<button class="filter-btn" data-domain="${d.slug}">${d.title}</button>`).join('');
    filters.addEventListener('click', e=>{
      const b = e.target.closest('button'); if(!b) return;
      active = b.dataset.domain;
      [...filters.querySelectorAll('button')].forEach(x=>x.classList.toggle('active',x===b));
      draw();
    });
  }
  search?.addEventListener('input',draw);
  draw();
}

function renderDomain(){
  const params = new URLSearchParams(location.search);
  const slug = params.get('slug') || 'optics';
  const d = bySlug(data.domains, slug);
  if(!d) return;
  document.title = `${d.title} — Khae Mostajo`;
  document.querySelector('#domain-title').textContent = d.title;
  document.querySelector('#domain-kicker').textContent = d.kicker;
  document.querySelector('#domain-desc').textContent = d.description;
  document.querySelector('#domain-projects').innerHTML =
    d.projects.map(s=>bySlug(data.projects,s)).filter(Boolean).map(projectCard).join('');
  document.querySelector('#domain-list').innerHTML =
    data.domains.map(x=>`<a class="${x.slug===slug?'active':''}" href="domain.html?slug=${x.slug}">${x.title}</a>`).join('');
}

function renderProject(){
  const params = new URLSearchParams(location.search);
  const slug = params.get('slug') || 'rcgs';
  const p = bySlug(data.projects, slug);
  if(!p) return;
  const d = bySlug(data.domains,p.domain);
  document.title = `${p.title} — Khae Mostajo`;
  document.querySelector('#project-breadcrumb').innerHTML =
    `<a href="work.html">Work</a> / <a href="domain.html?slug=${d?.slug||''}">${d?.title||''}</a> / ${p.title}`;
  document.querySelector('#project-title').textContent = p.title;
  document.querySelector('#project-summary').textContent = p.summary;
  document.querySelector('#project-year').textContent = p.year || '';
  document.querySelector('#project-status').textContent = p.status || '';
  document.querySelector('#project-tags').innerHTML = (p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('');
  document.querySelector('#project-sections').innerHTML = (p.sections||[]).map(([h,body])=>`
    <div class="info-card"><h3>${h}</h3><p>${body}</p></div>`).join('');
  document.querySelector('#project-domain').textContent = d?.title || '';
}

document.addEventListener('DOMContentLoaded',()=>{
  const page = document.body.dataset.page;
  if(page==='home') renderHome();
  if(page==='work') renderWork();
  if(page==='projects') renderProjects();
  if(page==='domain') renderDomain();
  if(page==='project') renderProject();

  const menu = document.querySelector('#menu-btn');
  const links = document.querySelector('#nav-links');
  if(menu && links){
    menu.addEventListener('click',()=>{
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.position='absolute';
      links.style.top='74px';
      links.style.left='12px';
      links.style.right='12px';
      links.style.padding='18px';
      links.style.flexDirection='column';
      links.style.alignItems='flex-start';
      links.style.background='rgba(5,11,15,.98)';
      links.style.border='1px solid rgba(163,190,202,.18)';
      links.style.borderRadius='14px';
    });
  }
});
