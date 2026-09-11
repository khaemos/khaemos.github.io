
window.KHAE_DATA = {
  domains: [
    {
      slug: "optics",
      title: "Optics",
      kicker: "Light • Refraction • Diffraction",
      description: "Experimental work in refraction, diffraction and optical visualization, including ferrocell-based magnetic field visualization.",
      projects: ["ferrocell-visualizer", "diffraction-experiments", "lens-refraction"]
    },
    {
      slug: "vlf",
      title: "VLF",
      kicker: "Very Low Frequency",
      description: "Receiver architecture and experimental systems in the 1–20 kHz range.",
      projects: ["vlf-multistage-receiver"]
    },
    {
      slug: "rf",
      title: "RF",
      kicker: "Radio Frequency",
      description: "Broadband, fixed-frequency and multi-frequency transmitter / receiver systems.",
      projects: ["rf-broadband-platform", "rf-fixed-frequency", "rf-multifrequency-platform"]
    },
    {
      slug: "hf",
      title: "HF",
      kicker: "High Frequency",
      description: "High-frequency experiments focused on standing-wave visualization and measurable field behavior.",
      projects: ["standing-wave-visualization"]
    },
    {
      slug: "oscillators",
      title: "Oscillators",
      kicker: "Resonant • Driven • Self-Oscillating",
      description: "Hard- and soft-switched oscillator systems, class-E stages, half bridges, GDT-driven topologies and self-resonant Slayer-style circuits.",
      projects: ["dual-class-e", "gdt-half-bridge", "slayer-self-resonant"]
    },
    {
      slug: "low-voltage",
      title: "Low Voltage",
      kicker: "Signal • Feedback • Amplification",
      description: "Signal generation, feedback systems and amplifier development for measurement and experimentation.",
      projects: ["signal-generator-20mhz", "feedback-circuits", "amplifier-platform"]
    },
    {
      slug: "high-voltage",
      title: "High Voltage",
      kicker: "DC • High Frequency",
      description: "Experimental power supplies and high-frequency high-voltage systems built for controlled laboratory work.",
      projects: ["hv-dc-supply", "hf-power-supply"]
    },
    {
      slug: "transformers",
      title: "Transformers",
      kicker: "Induction • Gate Drive • Current Sense",
      description: "Custom magnetic components including induction coils, GDTs, CTs and feedback transformers.",
      projects: ["induction-coil", "gdt", "current-transformer", "feedback-transformer"]
    },
    {
      slug: "microcontrollers",
      title: "Microcontrollers",
      kicker: "Embedded • Wireless • Control",
      description: "Embedded systems integrating wireless control, interfaces, sensing and actuation.",
      projects: ["rcgs", "mcu-doctor", "espnow-home-controller"]
    },
    {
      slug: "sensors",
      title: "Sensors",
      kicker: "Proximity • Instrumentation",
      description: "Custom sensing and instrumentation systems for physical-world interaction and diagnostics.",
      projects: ["capacitive-proximity-sensor", "athlete-monitor", "medical-data-acquisition"]
    },
    {
      slug: "motors",
      title: "Motors",
      kicker: "Motion • Robotics • Precision",
      description: "Motor control systems for steppers, DC motors and robotics, including sensing and precision motion.",
      projects: ["stepper-smart-driver", "dual-dc-motor-board", "robotics-motor-control"]
    },
    {
      slug: "3d-models",
      title: "3D Models",
      kicker: "CAD • Tools • Functional Parts",
      description: "Functional mechanical designs created for real workshop, laboratory and prototyping use.",
      projects: ["coil-winder", "vise-360", "single-hand-solder-tool"]
    },
    {
      slug: "machines",
      title: "Machines",
      kicker: "Automation • Fabrication",
      description: "Purpose-built electromechanical machines combining CAD, electronics, firmware and manufacturing.",
      projects: ["coil-winder", "automatic-grain-dispenser", "early-3d-printer", "auger-filler"]
    }
  ],

  projects: [
    {
      slug: "rcgs",
      title: "RCGS — RFID Gate & Console System",
      domain: "microcontrollers",
      year: "2026",
      featured: true,
      summary: "Embedded competition platform using RFID gates, a console and multiple game modes for RC events.",
      tags: ["ESP32", "RFID", "Wireless", "Embedded UI", "Product Design"],
      status: "Documented",
      sections: [
        ["Problem", "Create a repeatable timing and interaction system for RC competition events without relying on manual judging."],
        ["System", "RFID-based gates, embedded console, wireless communication and competitive / minigame operating modes."],
        ["Engineering focus", "Embedded firmware, event logic, system architecture, human-machine interaction and physical integration."]
      ]
    },
    {
      slug: "mcu-doctor",
      title: "MCU Doctor",
      domain: "microcontrollers",
      year: "2026",
      featured: true,
      summary: "Diagnostic PCB concept for observing MCU power, logic levels and communication activity.",
      tags: ["PCB", "Instrumentation", "MCU", "Diagnostics", "Firmware"],
      status: "In development",
      sections: [
        ["Purpose", "Build a compact diagnostic tool that helps characterize a microcontroller system while it is in use."],
        ["Measurements", "Current, voltage levels and protocol activity are part of the intended diagnostic workflow."],
        ["Engineering focus", "PCB design, embedded measurement, instrumentation and product integration."]
      ]
    },
    {
      slug: "coil-winder",
      title: "Precision Coil Winding Machine",
      domain: "machines",
      year: "2026",
      featured: true,
      summary: "Custom machine for controlled coil winding with synchronized axis motion and configurable wire diameter.",
      tags: ["Motion Control", "Stepper", "Firmware", "CAD", "3D Printing"],
      status: "Documented",
      sections: [
        ["Problem", "Create a repeatable winding process with predictable pitch and operator control."],
        ["System", "Synchronized core and axis motors, homing logic, configurable wire diameter and manual positioning."],
        ["Engineering focus", "Machine design, motor control, embedded firmware and manufacturing."]
      ]
    },
    {
      slug: "solar-radiation-dashboard",
      title: "Solar System Radiation Dashboard",
      domain: "sensors",
      year: "2025",
      featured: true,
      summary: "Interactive data visualization system combining external APIs with dedicated hardware interface components.",
      tags: ["API", "Data Visualization", "Hardware UI", "Sensors", "Web"],
      status: "Documented",
      sections: [
        ["Purpose", "Make space and radiation data easier to explore through a physical and digital interface."],
        ["System", "Web dashboard connected to external data APIs and hardware interface components."],
        ["Engineering focus", "Data acquisition, interface design, visualization and hardware/software integration."]
      ]
    },
    {
      slug: "automatic-grain-dispenser",
      title: "Automatic Grain Dispenser",
      domain: "machines",
      year: "2025",
      featured: true,
      summary: "Electromechanical dispensing machine designed for light and heavy grains.",
      tags: ["Automation", "CAD", "Firmware", "Motor Control", "Prototyping"],
      status: "Documented",
      sections: [
        ["Problem", "Handle different grain behaviors with a controllable dispensing mechanism."],
        ["System", "Mechanical dispensing architecture with motorized control and dedicated firmware."],
        ["Engineering focus", "Mechanism design, embedded control and practical prototyping."]
      ]
    },
    {
      slug: "ferrocell-visualizer",
      title: "Ferrocell Visualizer",
      domain: "optics",
      year: "2026",
      featured: true,
      summary: "Experimental optical platform for observing ferrofluid field patterns with controlled illumination.",
      tags: ["Optics", "Magnetics", "Experimental Physics", "3D Printing"],
      status: "Documented",
      sections: [
        ["Purpose", "Visualize magnetic field behavior through optical interaction with a ferrofluid cell."],
        ["System", "Custom enclosure, controlled lighting geometry and interchangeable magnetic configurations."],
        ["Engineering focus", "Experimental setup design, optics, magnetics and rapid prototyping."]
      ]
    },
    {
      slug: "vlf-multistage-receiver",
      title: "1–20 kHz Multi-Stage Receiver",
      domain: "vlf",
      year: "2026",
      featured: false,
      summary: "Experimental VLF receiver platform built around staged amplification and filtering.",
      tags: ["VLF", "Analog", "Receiver", "Filtering"],
      status: "Documentation in progress",
      sections: [["Overview", "Multi-stage receiver architecture covering the 1–20 kHz experimental range."]]
    },
    {
      slug: "rf-broadband-platform",
      title: "Broadband RF Transmitter / Receiver",
      domain: "rf",
      year: "2026",
      featured: false,
      summary: "Experimental broadband platform for RF transmission and reception.",
      tags: ["RF", "Broadband", "Receiver", "Transmitter"],
      status: "Documentation in progress",
      sections: [["Overview", "Broadband RF transmitter / receiver work developed as part of laboratory experimentation."]]
    },
    {
      slug: "standing-wave-visualization",
      title: "Standing Wave Visualization",
      domain: "hf",
      year: "2026",
      featured: false,
      summary: "High-frequency experimentation focused on observing and documenting standing-wave behavior.",
      tags: ["HF", "Standing Waves", "Visualization", "Measurement"],
      status: "Documentation in progress",
      sections: [["Overview", "Experimental visualization of standing-wave behavior at high frequency."]]
    },
    {
      slug: "dual-class-e",
      title: "Dual Class-E Amplifier Platform",
      domain: "oscillators",
      year: "2026",
      featured: false,
      summary: "Hard-switched oscillator / power stage experiments with and without gate-drive transformers.",
      tags: ["Class-E", "Oscillator", "Power Electronics", "GDT"],
      status: "Documentation in progress",
      sections: [["Overview", "Dual class-E amplifier experiments exploring direct drive and GDT-based drive approaches."]]
    },
    {
      slug: "gdt-half-bridge",
      title: "GDT Half-Bridge Oscillator",
      domain: "oscillators",
      year: "2026",
      featured: false,
      summary: "Soft-switched half-bridge development using gate-drive transformer coupling.",
      tags: ["Half Bridge", "GDT", "Resonance", "Power Electronics"],
      status: "Documentation in progress",
      sections: [["Overview", "Resonant half-bridge experimentation with transformer-isolated gate drive."]]
    },
    {
      slug: "signal-generator-20mhz",
      title: "0–20 MHz Signal Generator",
      domain: "low-voltage",
      year: "2026",
      featured: false,
      summary: "Variable-frequency signal generation platform for electronics experimentation.",
      tags: ["Signal Generator", "Analog", "Frequency", "Bench Tool"],
      status: "Documentation in progress",
      sections: [["Overview", "Bench signal-generation work targeting the 0–20 MHz range."]]
    },
    {
      slug: "hv-dc-supply",
      title: "0–470 VDC Laboratory Supply",
      domain: "high-voltage",
      year: "2026",
      featured: false,
      summary: "Variable high-voltage DC laboratory supply concept for controlled experiments.",
      tags: ["High Voltage", "Power Supply", "Lab"],
      status: "Documentation in progress",
      sections: [["Overview", "High-voltage DC supply work for controlled laboratory use."]]
    },
    {
      slug: "gdt",
      title: "Gate Drive Transformer",
      domain: "transformers",
      year: "2026",
      featured: false,
      summary: "Custom GDT development for high-frequency switching experiments.",
      tags: ["GDT", "Ferrite", "Gate Drive", "Magnetics"],
      status: "Documentation in progress",
      sections: [["Overview", "Gate-drive transformer design and bench validation for switching applications."]]
    },
    {
      slug: "capacitive-proximity-sensor",
      title: "Long-Range Capacitive Proximity Sensor",
      domain: "sensors",
      year: "2026",
      featured: false,
      summary: "ESP32-based proximity sensing experiment using a capacitive charge technique.",
      tags: ["ESP32", "Capacitive", "Sensor", "Proximity"],
      status: "Documentation in progress",
      sections: [["Overview", "Prototype long-range capacitive proximity sensing system with ESP32 integration."]]
    },
    {
      slug: "stepper-smart-driver",
      title: "Smart Stepper Driver",
      domain: "motors",
      year: "2026",
      featured: false,
      summary: "Stepper control platform with magnetic position sensing, current sensing and an integrated rear-shaft enclosure.",
      tags: ["Stepper", "TMC", "Position Sensor", "Current Sensor", "CAD"],
      status: "Documented",
      sections: [
        ["Purpose", "Combine motion drive, position feedback and current observation into one compact installation."],
        ["Mechanical integration", "Designed to mount at the rear shaft of the motor for compact system integration."],
        ["Engineering focus", "Motor control, sensing, PCB integration and mechanical packaging."]
      ]
    },
    {
      slug: "dual-dc-motor-board",
      title: "Dual DC Motor Controller — 5 A",
      domain: "motors",
      year: "2026",
      featured: false,
      summary: "Custom PCB for controlling two DC motors at currents up to 5 A.",
      tags: ["PCB", "Motor Control", "DC Motor", "Power Electronics"],
      status: "Documentation in progress",
      sections: [["Overview", "Dual-channel DC motor controller PCB designed for currents up to 5 A."]]
    },
    {
      slug: "early-3d-printer",
      title: "Early DIY 3D Printer",
      domain: "machines",
      year: "2010s",
      featured: true,
      summary: "A reliable 3D printer built during the early open-source RepRap era using hardware-store components and open-source firmware.",
      tags: ["3D Printing", "Open Source", "Mechanical Design", "Electronics", "Firmware"],
      status: "Historical project",
      sections: [
        ["Context", "Built when consumer 3D printing was still uncommon and few polished machines were available."],
        ["Approach", "Combined accessible mechanical parts with open-source motion-control software to create a working printer."],
        ["Significance", "Demonstrates early adoption, hands-on integration and practical system debugging."]
      ]
    },
    {
      slug: "auger-filler",
      title: "Auger Filler for Light / Heavy Grains",
      domain: "machines",
      year: "2025",
      featured: false,
      summary: "3D model and control firmware for an auger-based filling system adapted to different grain behaviors.",
      tags: ["CAD", "Firmware", "Automation", "Motor Control"],
      status: "Documented",
      sections: [["Overview", "Mechanical and embedded control design for an auger filler handling both light and heavy grains."]]
    },
    {
      slug: "espnow-home-controller",
      title: "ESP-NOW Home Controller",
      domain: "microcontrollers",
      year: "2025",
      featured: false,
      summary: "Home interface and controller for distributed ESP-NOW devices.",
      tags: ["ESP32", "ESP-NOW", "Wireless", "Home Automation"],
      status: "Documentation in progress",
      sections: [["Overview", "Wireless home interface and controller for distributed ESP-NOW devices."]]
    },
    {
      slug: "athlete-monitor",
      title: "RFID Athlete Monitor",
      domain: "sensors",
      year: "2025",
      featured: false,
      summary: "Wearable MCU and RFID concept for athlete identification and sensor monitoring.",
      tags: ["RFID", "Wearable", "MCU", "Sensors"],
      status: "Documentation in progress",
      sections: [["Overview", "Athlete monitoring concept combining RFID identification with wearable sensing."]]
    },
    {
      slug: "medical-data-acquisition",
      title: "Medical Device Data Acquisition + IoT",
      domain: "sensors",
      year: "2018",
      featured: false,
      summary: "Data acquisition from a blood glucose sampling device with an IoT monitoring platform.",
      tags: ["IoT", "Data Acquisition", "Medical Device", "Web"],
      status: "Historical project",
      sections: [["Overview", "Acquired device data and built an IoT platform for remote monitoring."]]
    }
  ]
};
