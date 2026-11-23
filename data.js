const SITE = {
  name: "Hi! I'm Thamil",
  role: "PhD IIT Bombay | CFD | Turbulence | Heat Transfer | Aerodynamics",
  contactText: "I’m happy to talk about CFD research, research collaborations and opportunities. Get in touch.",
  contact: [
    { type: "Email", label: "thamilthedal@gmail.com", url: "mailto:thamilthedal@gmail.com" },
    { type: "LinkedIn", label: "linkedin.com/in/thamilthedal", url: "https://www.linkedin.com/in/thamilthedal" },
    { type: "GitHub", label: "github.com/thamilthedal", url: "https://github.com/thamilthedal" },
    { type: "Medium", label: "medium.com/@thamilthedal", url: "https://medium.com/@thamilthedal" },
    { type: "WhatsApp", label: "+91-9952-67-4098", url: "https://wa.me/919952674098" }
  ],

  about: {
    text: "CFD Researcher. I am passionate about turbulence and heat transfer applications. I constantly dabble with problems that are challenging and exciting to solve. Completed PhD in Mechanical Engineering from IIT Bombay on modelling flow behavior and heat transfer at supercritical pressures. Currently looking for new opportunities to grow and learn.",
    stats: [
      { value: "7 years", label: "Experience", icon: "award" },
      { value: "Freelancer", label: "Thedal Flow Code", icon: "experience" }
    ]
  },

  skills: [
    { group: "Computational Fluid Dynamics", icon: "flow", items: "ANSYS Fluent (Advanced), Python (Advanced), High Performance Computing (Advanced), C (Advanced), ANSYS CFX (Intermediate), OpenFOAM (Intermediate)" },
    { group: "Workflow automation", icon: "gear", items: "PyFluent (Advanced), ROCKS cluster management (Advanced), BASH scripting (Advanced), Workflow integration (Intermediate)" }
  ],

  experience: [
    // { period: "Jun - Sep 2026", title: "Research Associate", org: "IIT Bombay",
    //   text: "Completed PhD on modelling flow behavior and heat transfer at supercritical pressures." },
    { period: "Jan - Sep 2026", title: "Research Consultant", org: "HINCOL India",
      text: "Audited and developed theoretical frameworks to assess and design newer tanks for modified bitumen plants based on Xicon, Vashi." },
    { period: "Dec 2022 - Feb 2023", title: "Research Consultant", org: "TABREJ DesignLife Pvt. Ltd.",
      text: "Conducted feasibility study on a proposed HVAC system and analyzed its bottlenecks, performing a 1D system level thermodynamic analysis." },
    { period: "2019 - 2026", title: "Research Scholar and Teaching Assistant, Mechanical Engineering", org: "IIT Bombay",
      text: "Completed PhD on modelling flow behavior and heat transfer at supercritical pressures." },
    { period: "Jul – Dec 2018", title: "Project Officer", org: "COPT, IIT Madras",
      text: "Conducted simulations on gas-turbine blade cooling and characterization of wing-tip vortices at COPT, IIT Madras, under Prof. BVSSS Prasad." }
  ],

  tools: [
    { name: "foamToFluent2D", desc: "Command-line tool for converting OpenFOAM 2D cases to ANSYS Fluent.",
      example: "foamToFluent2D --help", url: "",
      details: "", tags: ["OpenFOAM", "ANSYS Fluent", "CLI"] },
    { name: "residual_hpc", desc: "Command-line tool for tracking solver residuals on HPC clusters.",
      example: "residual_hpc --help", url: "",
      details: "", tags: ["HPC", "Residuals", "CLI"] },
    { name: "supercritical", desc: "Command-line tool for supercritical-pressure fluid work.",
      example: "supercritical --help", url: "",
      details: "", tags: ["Supercritical fluids", "Heat transfer", "CLI"] }
  ],

  publications: [
    { year: "2026", title: "Numerical Analysis of Pulsatile Flow of Supercritical Fluids Through a Vertical Pipe",
      authors: "Thamilmani Murugan, Amit Agrawal, Sandip K. Saha", venue: "Heat Transfer Journal, Oct 2026", url: "",
      details: "", tags: ["Supercritical water", "Convective heat transfer"] },
    { year: "2025", title: "Proposal of a turbulent Prandtl number model for predicting heat transfer deterioration in supercritical flows",
      authors: "Thamilmani Murugan, Amit Agrawal, Sandip K. Saha", venue: "Heat Transfer Engineering, Sep 2025", url: "",
      details: "", tags: ["Supercritical water", "Convective heat transfer"] },
    { year: "2023", title: "Study on Convective Heat Transfer of Supercritical Water in Annular Square Channel",
      authors: "Thamilmani Murugan, Arun K. Raj, Amit Agrawal, Sandip K. Saha", venue: "Heat Transfer Engineering, Jan 2023", url: "",
      details: "", tags: ["Supercritical water", "Convective heat transfer"] },
    { year: "2020", title: "Numerical studies on flow over multiple cylinders in tandem arrangement: Effect of number of cylinders",
      authors: "Thamilmani M, Amit Agrawal, Ajit Kumar R, Ajith Kumar S", venue: "FMFP International Conference, IIT Bombay, Mumbai, December 2020", url: "",
      details: "", tags: ["Flow over cylinders", "Tandem arrangement"] },
    { year: "2018", title: "Studies on the inward spherical solidification of a phase change material dispersed with macro particles",
      authors: "N. Lakshmi Narasimhan, V. Veeraraghavan, G. Ramanathan, B. Sanjay Bharadwaj, M. Thamilmani", venue: "The Journal of Energy Storage, vol. 15, pp. 158-171, Feb 2018", url: "",
      details: "", tags: ["Phase change material", "Solidification", "Energy storage"] }
  ]
};

const PHOTO = "photo.jpg";
