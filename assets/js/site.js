const data = window.KHAE_DATA;
function bySlug(items, slug){ return items.find(x => x.slug === slug); }
function safeImage(primary, fallback=''){
  if(!primary) return '';
  return `<img src="${primary}" alt="" loading="lazy"${fallback?` onerror="this.onerror=null;this.src='${fallback}'"`:''}>`;
}
function domainCard(d, index){
  const cover=`assets/images/domains/${d.slug}.png`;
  return `<a class="domain-card" href="domain.html?slug=${d.slug}"><div class="domain-visual">${safeImage(cover)}<div class="domain-code">${String(index+1).padStart(2,'0')} / ${d.kicker}</div></div><div class="card-body"><div class="card-kicker">${d.kicker}</div><h3>${d.title}</h3><p>${d.description}</p></div></a>`;
}
function projectCard(p){
  const media=p.hero?`${safeImage(p.hero,p.heroFallback||'')}`:'';
  return `<a class="project-card" href="project.html?slug=${p.slug}"><div class="project-media">${media}</div><div class="card-body"><div class="card-kicker">${p.year||''} • ${p.status||''}</div><h3>${p.title}</h3><p>${p.summary}</p><div class="tags">${(p.tags||[]).slice(0,4).map(t=>`<span class="tag">${t}</span>`).join('')}</div></div></a>`;
}
function renderHome(){ const dg=document.querySelector('#domain-grid'); if(dg) dg.innerHTML=data.domains.map(domainCard).join(''); const pg=document.querySelector('#featured-grid'); if(pg) pg.innerHTML=data.projects.filter(p=>p.featured).slice(0,6).map(projectCard).join(''); }
function renderWork(){ const grid=document.querySelector('#work-grid'); if(grid) grid.innerHTML=data.domains.map(domainCard).join(''); }
function renderProjects(){ const grid=document.querySelector('#projects-grid'),search=document.querySelector('#project-search'),filters=document.querySelector('#project-filters'); let active='all'; const draw=()=>{const q=(search?.value||'').toLowerCase();grid.innerHTML=data.projects.filter(p=>(active==='all'||p.domain===active)&&`${p.title} ${p.summary} ${(p.tags||[]).join(' ')}`.toLowerCase().includes(q)).map(projectCard).join('')}; if(filters){filters.innerHTML=`<button class="filter-btn active" data-domain="all">All</button>`+data.domains.map(d=>`<button class="filter-btn" data-domain="${d.slug}">${d.title}</button>`).join('');filters.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;active=b.dataset.domain;[...filters.querySelectorAll('button')].forEach(x=>x.classList.toggle('active',x===b));draw()})} search?.addEventListener('input',draw);draw(); }
function renderDomain(){ const slug=new URLSearchParams(location.search).get('slug')||'optics',d=bySlug(data.domains,slug);if(!d)return;document.title=`${d.title} — Khae Mostajo`;document.querySelector('#domain-title').textContent=d.title;document.querySelector('#domain-kicker').textContent=d.kicker;document.querySelector('#domain-desc').textContent=d.description;const hero=document.querySelector('#domain-cover');if(hero)hero.src=`assets/images/domains/${d.slug}.png`;document.querySelector('#domain-projects').innerHTML=d.projects.map(s=>bySlug(data.projects,s)).filter(Boolean).map(projectCard).join('');document.querySelector('#domain-list').innerHTML=data.domains.map(x=>`<a class="${x.slug===slug?'active':''}" href="domain.html?slug=${x.slug}">${x.title}</a>`).join(''); }
function renderProject(){
  const slug=new URLSearchParams(location.search).get('slug')||'the-nature-of-light',p=bySlug(data.projects,slug);if(!p)return;
  const d=bySlug(data.domains,p.domain);document.title=`${p.title} — Khae Mostajo`;
  const crumb=document.querySelector('#project-breadcrumb');
  if(crumb) crumb.innerHTML=`<a href="projects.html">Projects</a> &gt; <a href="domain.html?slug=${d?.slug||''}">${d?.title||''}</a> &gt; ${p.title}`;
  const doc=document.querySelector('#project-document'); if(!doc)return;
  if(slug==='the-nature-of-light'){
    doc.innerHTML=`
      <h1>The nature of light</h1>
      <div class="project-cover"><img src="assets/projects/the-nature-of-light/hero.png" alt="Light passing through a prism in an optics laboratory"></div>
      <p>When an electromagnetic oscillation is generated, it propagates through space as a wave known as light. Spanning from invisible to visible frequencies, these longitudinal waves are the carriers of energy throughout the universe and compose the electromagnetic spectrum.</p>
      <p>To observe these waves experimentally, an electric oscillator <strong>(Fig. 1)</strong> is used to generate electromagnetic oscillations at 12 kHz.</p>
      <figure class="document-figure"><img src="assets/projects/the-nature-of-light/fig-1.png" alt="Electric oscillator at 12 kHz"><figcaption>Fig. 1</figcaption></figure>
      <p>Because the human eye cannot see this frequency and the ear cannot hear it as it is not an acoustic wave traveling through air, a tuned electric receiver <strong>(Fig. 2)</strong> must be used for detection.</p>
      <figure class="document-figure"><img src="assets/projects/the-nature-of-light/fig-2.png" alt="Tuned electric receiver"><figcaption>Fig. 2</figcaption></figure>
      <p>This phenomenon can be further verified by placing the receiver inside a vacuum chamber, despite the complete absence of air molecules, the electromagnetic waves continue to propagate <strong>(Fig. 3)</strong>.</p>
      <figure class="document-figure"><img src="assets/projects/the-nature-of-light/fig-3.png" alt="Receiver in vacuum chamber with transmitter outside"><figcaption>Fig. 3</figcaption></figure>
      <p>This experiment exposes a fundamental characteristic of electromagnetic radiation, it does not propagate through the air. If the vacuum chamber is empty, how do the waves reach the receiver? Here, we encounter the most controversial debate in the history of science, the nature of light's medium, famously termed as the ether.</p>
      <p>When this medium is stimulated to vibrate between 400 THz and 790 THz, our eyes detect these frequencies as visible light. Like all electromagnetic radiation, visible light propagates through the medium at a tremendous velocity, governed by the medium's elasticity and density.</p>
      <p>These properties can be observed in any setup where small electromagnetic oscillations are present. In an induction coil, for example, light phenomena occur due to the constant electrical stimulation of air molecules at the electrode tips <strong>(see the transformers section for these experiments)</strong>. Another example is sonoluminescence, where the implosion of a microscopic bubble triggers rapid oscillations that propagate at visible frequencies, producing a distinct flash of light.</p>
      <p>Now let's make an experiment to see how these waves can alter their trajectory, phenomena known as deflection, refraction and diffraction.</p>
      <p class="continue-project"><strong>Continue to (Ferrocell electromagnetic diffraction)</strong></p>`;
  } else {
    doc.innerHTML=`<h1>${p.title}</h1>${p.hero?`<div class="project-cover">${safeImage(p.hero,p.heroFallback||'')}</div>`:''}<p class="project-lead">${p.summary||''}</p>${(p.sections||[]).map(([h,body])=>`<h2>${h}</h2><p>${body}</p>`).join('')}`;
  }
}
document.addEventListener('DOMContentLoaded',()=>{const page=document.body.dataset.page;if(page==='home')renderHome();if(page==='work')renderWork();if(page==='projects')renderProjects();if(page==='domain')renderDomain();if(page==='project')renderProject();const menu=document.querySelector('#menu-btn'),links=document.querySelector('#nav-links');if(menu&&links)menu.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='74px';links.style.left='12px';links.style.right='12px';links.style.padding='18px';links.style.flexDirection='column';links.style.alignItems='flex-start';links.style.background='rgba(5,11,15,.98)';links.style.border='1px solid rgba(163,190,202,.18)';links.style.borderRadius='14px';});});
