import { useEffect, useState } from "react";

const profile = {
  name: "Shubham Tagunde",
  role: "Software Engineer | .NET Full Stack Developer",
  location: "Pune, Maharashtra, India",
  email: "shubhamtagunde26@gmail.com",
  phone: "+91 86689 32609",
  phoneHref: "+918668932609",
  linkedin: "https://www.linkedin.com/in/shubham-tagunde/",
  experience: "2.5+"
};

const skillGroups = [
  {
    title: "Languages",
    subtitle: "Core programming",
    icon: "code",
    skills: ["C#", "SQL / T-SQL", "JavaScript", "TypeScript", "HTML5"]
  },
  {
    title: "Backend",
    subtitle: ".NET ecosystem",
    icon: "server",
    skills: ["ASP.NET Core", "ASP.NET MVC", "Web API", "EF Core", "ADO.NET", "LINQ", "REST APIs"]
  },
  {
    title: "Frontend",
    subtitle: "Web interfaces",
    icon: "layout",
    skills: ["Angular", "Razor Views", "JavaScript", "jQuery", "AJAX", "Bootstrap", "CSS3"]
  },
  {
    title: "Database",
    subtitle: "Data & optimization",
    icon: "database",
    skills: ["SQL Server", "Stored Procedures", "Views", "Triggers", "Joins", "Transactions", "Indexing", "Query Optimization"]
  },
  {
    title: "Architecture",
    subtitle: "Design & patterns",
    icon: "layers",
    skills: ["OOP", "SOLID", "MVC", "Layered Architecture", "Repository Pattern", "Service Layer", "Dependency Injection", "DTOs"]
  },
  {
    title: "Security",
    subtitle: "Identity & permissions",
    icon: "shield",
    skills: ["RBAC", "JWT", "OAuth 2.0", "Google OAuth", "Session Management", "Validation", "Exception Handling"]
  },
  {
    title: "Testing & API",
    subtitle: "Verification & docs",
    icon: "check",
    skills: ["Postman", "Swagger", "API Testing", "Debugging", "Integration Testing"]
  },
  {
    title: "Tools & Delivery",
    subtitle: "Development lifecycle",
    icon: "tool",
    skills: ["Visual Studio", "VS Code", "SSMS", "Git", "GitHub", "IIS", "Razorpay", "Agile / Scrum"]
  }
];

const projects = [
  {
    number: "01",
    category: "FULL STACK · WEB API",
    name: "TechAgroVista",
    subtitle: "Agro-Tourism Management System",
    description: "A booking platform for farm discovery, listings, pricing, availability calendars, reservations, and farm-owner revenue tracking.",
    stack: ["ASP.NET Core Web API", "Angular", "EF Core", "SQL Server", "JWT", "Google OAuth", "Razorpay"],
    highlights: [
      "Built layered API endpoints and Angular workflows for farm search, listings, pricing, availability, and booking.",
      "Integrated payment order creation, signature verification, and payment-status checks before confirming bookings.",
      "Added server-side availability validation to prevent conflicting reservations.",
      "Implemented JWT security, phone/email OTP, and Google OAuth 2.0 login."
    ],
    architecture: [
      ["Angular UI", "Farm search, listings, availability, booking, and owner workflows."],
      ["API Controllers", "Validate HTTP requests and map inputs to DTOs."],
      ["Business & Data Access", "Apply booking and availability rules using EF Core and LINQ."],
      ["SQL Server + Razorpay", "Persist booking data and verify payment state before confirmation."]
    ],
    color: "green"
  },
  {
    number: "02",
    category: "ENTERPRISE WEB · PROCUREMENT",
    name: "TechProcure360",
    subtitle: "Purchase-to-Pay Procurement System",
    role: "Team Leader",
    description: "A procurement workflow covering purchase requisitions, supplier quotations, approvals, and purchase-order generation.",
    stack: ["ASP.NET Core Web API", "EF Core", "SQL Server", "jQuery", "AJAX"],
    highlights: [
      "Led the Purchase-to-Pay workflow across requisitions, supplier quotations, and purchase orders.",
      "Structured APIs with Controller, Service, and Repository separation.",
      "Built approval and status-transition rules, including vendor/item details, pricing, discounts, GST, and totals.",
      "Coordinated module integration and consistency checks across the team."
    ],
    architecture: [
      ["jQuery / AJAX UI", "Dynamic forms and user actions for requisitions and quotations."],
      ["API Controllers", "Handle requests and route them to application services."],
      ["Service + Repository", "Enforce approvals, status transitions, and procurement rules."],
      ["EF Core + SQL Server", "Persist procurement records and query business data."]
    ],
    color: "blue"
  },
  {
    number: "03",
    category: "ENTERPRISE WEB · MVC",
    name: "TechSocietyConnect",
    subtitle: "Housing Society Management System",
    role: "Team Leader",
    description: "A role-based housing society application supporting residents, administration, security, and financial operations.",
    stack: ["ASP.NET MVC", "ADO.NET", "jQuery", "AJAX", "SQL Server"],
    highlights: [
      "Coordinated a team of 7–8 developers and role-specific workflows for six user types.",
      "Developed complaint tracking, notices, meetings, visitor management, and financial operations.",
      "Built a Chairman dashboard for reviewing society activity.",
      "Used stored procedures, joins, aggregate queries, transactions, and server-side role authorization."
    ],
    architecture: [
      ["Razor Views + JavaScript", "Role-specific pages and interactive workflows."],
      ["MVC Controllers", "Validate actions and enforce access rules."],
      ["Business Logic + ADO.NET", "Coordinate module behavior and parameterized SQL calls."],
      ["SQL Server", "Stored procedures, joins, transactions, and normalized records."]
    ],
    color: "purple"
  },
  {
    number: "04",
    category: "LEARNING · PAYMENT INTEGRATION",
    name: "TechLearnStack",
    subtitle: "Learning Management System",
    description: "A training application for courses, learners, trainers, batches, enrollments, and learning activities.",
    stack: ["ASP.NET MVC", "C#", "ADO.NET", "SQL Server", "Bootstrap", "Razorpay"],
    highlights: [
      "Built course, learner, trainer, batch, enrollment, and training-activity modules.",
      "Created validated responsive screens using MVC Controllers, Models, and Razor Views.",
      "Integrated payment order creation, checkout handling, and server-side verification.",
      "Updated enrollment access only after payment signature and status checks."
    ],
    architecture: [
      ["Razor Views + Bootstrap", "Render responsive course and enrollment screens."],
      ["MVC Controllers", "Handle form submissions and workflow requests."],
      ["Business Rules + ADO.NET", "Validate purchase and enrollment conditions."],
      ["SQL Server + Razorpay", "Store application records and verify payment outcomes."]
    ],
    color: "gold"
  },
  {
    number: "05",
    category: "DESKTOP CRM · WINFORMS",
    name: "TsTrackVisitor",
    subtitle: "Visitor Management System",
    description: "A Windows Forms desktop application for visitor registration, appointment approval, badge issuance, host tracking, and check-out.",
    stack: ["C#", "Windows Forms", "ADO.NET", "SQL Server"],
    highlights: [
      "Built Receptionist and Administrator screens with data-bound WinForms controls.",
      "Implemented watchlist/blocklist checks, staff/student attendance, and visitor-history search.",
      "Used parameterized commands, stored procedures, and transactions.",
      "Separated UI, business logic, and data access with class-based OOP architecture."
    ],
    architecture: [
      ["Windows Forms UI", "Receptionist and Administrator screens backed by data-bound controls."],
      ["Application Logic", "Manage visitor registration, approvals, badge issuance, and checkout."],
      ["ADO.NET Data Access", "Use parameterized commands, stored procedures, and transactions."],
      ["SQL Server", "Persist normalized visitor, appointment, and history records."]
    ],
    color: "rose"
  }
];

const strengths = [
  { title: "Layered Architecture", text: "Clear separation of controllers, business logic, and data access.", icon: "layers", color: "green" },
  { title: "SQL Optimization", text: "Stored procedures, joins, indexes, transactions, and query tuning.", icon: "database", color: "blue" },
  { title: "REST API Engineering", text: "API design, DTOs, validation, Swagger, and Postman testing.", icon: "code", color: "purple" },
  { title: "Agile Delivery", text: "Task coordination, code reviews, Git workflows, and module integration.", icon: "users", color: "gold" }
];

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    code: <><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 4-4 16"/></>,
    server: <><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01M11 8h6M11 17h6"/></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    tool: <><path d="M14.5 6.5a5 5 0 0 0-6.9 6.9L3 18l3 3 4.6-4.6a5 5 0 0 0 6.9-6.9L14 13l-3-3 3.5-3.5Z"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>,
    arrow: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    down: <><path d="m6 9 6 6 6-6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 2-2Z"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    location: <><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.3"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></>,
    checkCircle: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>
  };
  return <svg {...common}>{paths[name] || paths.code}</svg>;
}

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2>{title} <span>{accent}</span></h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillSearch, setSkillSearch] = useState("");
  const [activeProject, setActiveProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const photoUrl = `${import.meta.env.BASE_URL}profile.png`;
  const navItems = [
    ["Home", "#home"], ["Summary", "#summary"], ["Skills", "#skills"],
    ["Experience", "#experience"], ["Projects", "#projects"],
    ["Education", "#education"], ["Contact", "#contact"]
  ];

  useEffect(() => {
    if (!activeProject && !resumeOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
        setResumeOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject, resumeOpen]);

  useEffect(() => {
    document.body.style.overflow = activeProject || resumeOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject, resumeOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const filteredGroups = skillGroups.map(group => ({
    ...group,
    skills: group.skills.filter(skill => skill.toLowerCase().includes(skillSearch.trim().toLowerCase()))
  })).filter(group => !skillSearch.trim() || group.skills.length > 0);

  return (
    <div className="portfolio">
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Shubham Tagunde home">
            <span className="brand-monogram">ST<span>.</span></span>
            <span className="brand-name">Shubham Tagunde<small>SOFTWARE ENGINEER</small></span>
          </a>
          <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            <Icon name={menuOpen ? "close" : "layers"} size={21}/>
          </button>
          <nav className={`main-nav ${menuOpen ? "main-nav-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button type="button" className="header-preview" onClick={() => setResumeOpen(true)}><Icon name="file" size={15}/> Preview Resume</button>
            <a className="header-download" href={resumeUrl} download="Shubham-Tagunde-Resume.pdf"><Icon name="download" size={15}/> Download Resume</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one"/>
          <div className="hero-glow hero-glow-two"/>
          <div className="content-container hero-grid">
            <div className="hero-content">
              <div className="hero-status"><span className="pulse-dot"/> SOFTWARE ENGINEER <span className="status-separator">·</span> .NET FULL STACK</div>
              <h1>Shubham <span>Tagunde</span></h1>
              <div className="hero-role">Full Stack .NET Developer <span className="experience-badge">{profile.experience} Years Experience</span></div>
              <div className="hero-meta">
                <span><Icon name="pin" size={16}/>{profile.location}</span>
                <a href={`mailto:${profile.email}`}><Icon name="mail" size={16}/>{profile.email}</a>
                <a href={`tel:${profile.phoneHref}`}><Icon name="phone" size={16}/>{profile.phone}</a>
              </div>
              <p className="hero-bio">
                Full Stack .NET Developer with <strong>2.5+ years of experience</strong> building business applications with C#, ASP.NET Core, ASP.NET MVC, Web API, EF Core, ADO.NET, SQL Server, and Angular. Focused on layered architecture, secure workflows, reliable APIs, and practical user interfaces.
              </p>
              <div className="hero-metrics">
                <article className="metric-card"><strong>2.5+</strong><span>Years Experience</span></article>
                <article className="metric-card"><strong>.NET</strong><span>Core & MVC</span></article>
                <article className="metric-card"><strong>C#</strong><span>Web API & Services</span></article>
                <article className="metric-card"><strong>SQL</strong><span>Server & Optimization</span></article>
              </div>
              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => setResumeOpen(true)}>Preview Resume <Icon name="arrow" size={16}/></button>
                <a className="button button-secondary" href="#projects">Explore Key Projects <Icon name="down" size={16}/></a>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-orbit orbit-one"/>
              <div className="portrait-orbit orbit-two"/>
              <div className="portrait-blob">
                <img src={photoUrl} alt="Portrait of Shubham Tagunde" />
              </div>
              <div className="floating-badge badge-api"><span className="badge-icon green"><Icon name="code" size={18}/></span><span><strong>ASP.NET Core & Web API</strong><small>Clean REST architecture</small></span></div>
              <div className="floating-badge badge-sql"><span className="badge-icon blue"><Icon name="database" size={18}/></span><span><strong>SQL Server</strong><small>Stored procedures & indexing</small></span></div>
              <div className="portrait-caption">ENGINEERING · DELIVERY · QUALITY</div>
            </div>
          </div>
        </section>

        <section className="section section-summary" id="summary">
          <div className="content-container">
            <div className="section-kicker">CANDIDATE OVERVIEW</div>
            <SectionHeading eyebrow="ENGINEERING PHILOSOPHY & CORE STRENGTHS" title="Professional" accent="Summary" description="A practical, full-stack approach to translating business workflows into reliable software."/>
            <div className="summary-layout">
              <div className="summary-copy">
                <p>Experienced in designing, developing, and maintaining web and desktop applications using C#, ASP.NET Core, ASP.NET MVC, Web API, Entity Framework Core, LINQ, ADO.NET, and SQL Server.</p>
                <p>Skilled in RESTful API development, layered architecture, object-oriented programming, database optimization, and responsive front-end interfaces using Angular, JavaScript, jQuery, AJAX, Bootstrap, HTML5, and CSS3.</p>
                <p>Comfortable supporting the full application lifecycle, including requirements analysis, code reviews, API testing, IIS deployment, debugging, and ongoing maintenance.</p>
                <div className="strength-tags">
                  {["Layered Architecture", "RESTful Web APIs", "Database Optimization", "RBAC & Validation", "IIS Deployment", "Agile / Scrum"].map(tag => <span key={tag}><Icon name="checkCircle" size={14}/>{tag}</span>)}
                </div>
              </div>
              <div className="strength-grid">
                {strengths.map(item => <article className={`strength-card ${item.color}`} key={item.title}>
                  <div className="strength-icon"><Icon name={item.icon} size={21}/></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <div className="content-container">
            <div className="section-kicker">TECHNICAL COMPETENCIES</div>
            <SectionHeading eyebrow="TECH STACK & ENGINEERING TOOLKIT" title="Skills" accent="Matrix" description="Filter by a technology to quickly find relevant tools, frameworks, and engineering practices."/>
            <label className="skills-filter">
              <Icon name="search" size={18}/>
              <input type="search" value={skillSearch} onChange={event => setSkillSearch(event.target.value)} placeholder="Filter skills (e.g. C#, EF Core, Angular, SQL Server, IIS)..." aria-label="Filter technical skills"/>
              {skillSearch && <button type="button" onClick={() => setSkillSearch("")} aria-label="Clear skill filter"><Icon name="close" size={16}/></button>}
            </label>
            <div className="skills-grid">
              {filteredGroups.map((group, index) => <article className="skill-card" key={group.title}>
                <div className={`skill-icon skill-icon-${group.icon}`}><Icon name={group.icon} size={20}/></div>
                <div className="skill-heading"><h3>{group.title}</h3><p>{group.subtitle}</p></div>
                <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </article>)}
              {filteredGroups.length === 0 && <div className="empty-filter">No matching skills. Try a broader keyword.</div>}
            </div>
          </div>
        </section>

        <section className="section section-experience" id="experience">
          <div className="content-container">
            <div className="section-kicker">WORK HISTORY</div>
            <SectionHeading eyebrow="PROFESSIONAL EXPERIENCE" title="Building and" accent="Delivering" description="Hands-on engineering across backend APIs, front-end workflows, data access, integration, and production support."/>
            <article className="experience-panel">
              <div className="experience-overview">
                <div className="company-mark">TS<span>.</span></div>
                <div className="experience-title-wrap">
                  <h3>Software Engineer</h3>
                  <p className="company-name">Techsum Technology <span>·</span> Pune, Maharashtra</p>
                  <p className="experience-date">2024 – Present</p>
                </div>
                <span className="current-role"><i/> Current Role</span>
              </div>
              <div className="experience-details">
                <div className="experience-summary-text">
                  <h4>Roles & Responsibilities</h4>
                  <p>Coordinate delivery across application modules while contributing to implementation, database design, integration, debugging, and release support.</p>
                </div>
                <div className="responsibility-grid">
                  <div><span>01</span><h4>Team Delivery</h4><p>Coordinate a team of 7–8 developers, distribute tasks, track sprint progress, review code, and support Git merges and integration.</p></div>
                  <div><span>02</span><h4>Backend & APIs</h4><p>Build REST APIs with C#, ASP.NET Core Web API, and ASP.NET MVC using layered architecture, DTOs, DI, and SOLID principles.</p></div>
                  <div><span>03</span><h4>SQL & Data Access</h4><p>Implement data operations with ADO.NET, EF Core, and LINQ; maintain stored procedures, views, triggers, indexes, and transactions.</p></div>
                  <div><span>04</span><h4>Security & Integrations</h4><p>Implement RBAC, JWT, Google OAuth 2.0, validation, and payment workflows with server-side signature and status verification.</p></div>
                  <div><span>05</span><h4>Frontend Engineering</h4><p>Build responsive interfaces using Angular, Razor Views, JavaScript, jQuery, AJAX, and Bootstrap.</p></div>
                  <div><span>06</span><h4>Testing & Production</h4><p>Test endpoints with Swagger and Postman, debug across layers, and support IIS hosting, deployment verification, and maintenance.</p></div>
                </div>
                <div className="applied-stack"><strong>Applied Technologies</strong><div>{["C#", "ASP.NET Core", "ASP.NET MVC", "Web API", "EF Core", "LINQ", "ADO.NET", "SQL Server", "Angular", "JavaScript", "jQuery", "IIS", "GitHub"].map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="content-container">
            <div className="section-kicker">PORTFOLIO DELIVERABLES</div>
            <SectionHeading eyebrow="SELECTED PROJECTS" title="Key" accent="Projects" description="Selected web and desktop applications, presented through the workflows and technologies described in my resume."/>
            <div className="projects-grid">
              {projects.map(project => <article className={`project-card project-${project.color}`} key={project.number}>
                <div className="project-card-top">
                  <span className="project-category">{project.category}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                {project.role && <span className="project-role">{project.role}</span>}
                <p className="project-description">{project.description}</p>
                <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <ul className="project-highlights">{project.highlights.slice(0, 3).map(item => <li key={item}>{item}</li>)}</ul>
                <button type="button" className="architecture-button" onClick={() => setActiveProject(project)}>View Full Architecture & Pipeline <Icon name="arrow" size={15}/></button>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section section-education" id="education">
          <div className="content-container">
            <div className="section-kicker">EDUCATION</div>
            <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education &" accent="Foundations" description="The academic foundation behind my software engineering career."/>
            <article className="education-card">
              <div className="education-emblem"><Icon name="file" size={28}/></div>
              <div className="education-main">
                <span className="education-label">BACHELOR'S DEGREE</span>
                <h3>P.E.S. Modern College of Engineering</h3>
                <p>Ganeshkhind, Pune</p>
                <div className="education-degree">B.Tech in Computer Science</div>
              </div>
              <div className="education-meta"><strong>2021</strong><span>CGPA 6.3 / 10</span></div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="content-container">
            <div className="section-kicker">LET'S CONNECT</div>
            <div className="contact-panel">
              <div className="contact-decoration contact-decoration-one"/>
              <div className="contact-decoration contact-decoration-two"/>
              <div className="contact-content">
                <p className="contact-eyebrow">OPEN TO A CONVERSATION</p>
                <h2>Let's build something<br/><span>meaningful.</span></h2>
                <p className="contact-copy">For engineering opportunities, project discussions, or a conversation about building reliable software, feel free to reach out.</p>
                <div className="contact-actions">
                  <a className="button button-light" href={`mailto:${profile.email}`}><Icon name="mail" size={16}/> Email me <Icon name="arrow" size={15}/></a>
                  <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="external" size={15}/></a>
                  <button className="button button-ghost" type="button" onClick={copyEmail}>{copied ? "Email copied" : "Copy email"}</button>
                </div>
                <div className="contact-details"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-container footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-monogram">ST<span>.</span></span><span className="brand-name">Shubham Tagunde<small>.NET FULL STACK DEVELOPER</small></span></a>
          <p>Designed around engineering, clarity, and delivery.</p>
          <span>© {new Date().getFullYear()} Shubham Tagunde</span>
          <a className="footer-top" href="#home">Back to top <Icon name="arrow" size={14}/></a>
        </div>
      </footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setActiveProject(null); }}>
        <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <div className="modal-header">
            <div><span className="modal-eyebrow">PROJECT ARCHITECTURE · {activeProject.number}</span><h2 id="project-modal-title">{activeProject.name}</h2><p>{activeProject.subtitle}</p></div>
            <button type="button" className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><Icon name="close" size={20}/></button>
          </div>
          <p className="modal-description">{activeProject.description}</p>
          <div className="pipeline-list">
            {activeProject.architecture.map((step, index) => <div className="pipeline-step" key={step[0]}>
              <span className="pipeline-number">0{index + 1}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div>{index < activeProject.architecture.length - 1 && <span className="pipeline-connector"/>}
            </div>)}
          </div>
          <div className="modal-highlights"><h3>Implementation highlights</h3><ul>{activeProject.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div className="modal-footer"><div className="project-tags">{activeProject.stack.map(tag => <span key={tag}>{tag}</span>)}</div><button className="button button-primary" type="button" onClick={() => setActiveProject(null)}>Close details</button></div>
        </section>
      </div>}

      {resumeOpen && <div className="modal-backdrop resume-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setResumeOpen(false); }}>
        <section className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
          <div className="modal-header resume-modal-header">
            <div><span className="modal-eyebrow">DOCUMENT PREVIEW</span><h2 id="resume-modal-title">Shubham Tagunde — Resume</h2><p>Preview your current resume or download a copy.</p></div>
            <button type="button" className="modal-close" onClick={() => setResumeOpen(false)} aria-label="Close resume preview"><Icon name="close" size={20}/></button>
          </div>
          <iframe className="resume-frame" title="Shubham Tagunde resume PDF" src={resumeUrl}/>
          <div className="resume-modal-actions"><a className="button button-primary" href={resumeUrl} download="Shubham-Tagunde-Resume.pdf"><Icon name="download" size={15}/> Download PDF</a><a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">Open PDF in new tab <Icon name="external" size={15}/></a></div>
        </section>
      </div>}
    </div>
  );
}

export default App;
