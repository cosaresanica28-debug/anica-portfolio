import { useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'WEB DEVELOPMENT',
    title: 'Student E-Portfolio',
    description: 'A personal website concept for presenting my background, technical skills, sample projects, and contact information.',
    tags: ['React', 'Tailwind CSS', 'Responsive UI'],
    accent: 'from-violet-500/30 to-indigo-500/10',
  },
  {
    number: '02',
    type: 'JAVA / PROGRAMMING',
    title: 'Login System Practice',
    description: 'A beginner Java exercise focused on user input, username and password handling, and basic password validation.',
    tags: ['Java', 'OOP Basics', 'Validation'],
    accent: 'from-cyan-500/25 to-blue-500/10',
  },
  {
    number: '03',
    type: 'PYTHON / APPLICATION',
    title: 'Meal Suggestion Program',
    description: 'A simple console application that suggests meal ideas by category, including breakfast, lunch, and dinner.',
    tags: ['Python', 'Conditionals', 'Functions'],
    accent: 'from-fuchsia-500/25 to-violet-500/10',
  },
  {
    number: '04',
    type: 'DATABASE / UI DESIGN',
    title: 'Sales Interface Wireframe',
    description: 'A low-fidelity sales screen concept with product search, product list, cart, quantity, total, payment, and checkout.',
    tags: ['Wireframing', 'UI/UX', 'Canva'],
    accent: 'from-amber-500/25 to-orange-500/10',
  },
]

const skills = [
  { name: 'HTML', level: 'Markup & structure' },
  { name: 'CSS', level: 'Styling & layouts' },
  { name: 'Java', level: 'Programming basics' },
  { name: 'XML', level: 'Structured documents' },
  { name: 'ReactJS', level: 'Currently learning' },
  { name: 'Tailwind CSS', level: 'Currently learning' },
]

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Resume', '#resume'],
  ['Contact', '#contact'],
]

function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    code: <><path d="m8 17-5-5 5-5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    external: <><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name] || paths.code}
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl">
      <nav className="container-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 font-bold text-violet-200 ring-1 ring-violet-400/25">AC</span>
          <span className="font-semibold tracking-tight text-white">Anica<span className="text-violet-300">.</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>
          ))}
          <a href="#contact" className="rounded-full border border-violet-300/30 px-4 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-400/10">Let's talk <Icon name="arrow" className="ml-1 inline h-4 w-4" /></a>
        </div>
        <button className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>
      {open && <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
        {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{label}</a>)}
      </div>}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] scroll-mt-24 items-center overflow-hidden pt-24">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-violet-600/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />
      <div className="container-shell relative grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2 text-sm text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.8)]" />
            IT Student · Open to learning
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">Hello, I'm</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Anica C.<br /><span className="gradient-text">Cosares</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            An Information Technology student exploring web development, programming, and creative digital solutions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-400">Explore my work <Icon name="arrow" className="h-4 w-4" /></a>
            <a href="#about" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5">About me</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Icon name="code" className="h-4 w-4 text-violet-300" /> BS Information Technology</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-300" /> Cavite State University – Tanza Campus</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-blue-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" /></div>
              <span className="text-xs text-slate-500">about-anica.jsx</span>
            </div>
            <div className="space-y-4 py-7 font-mono text-sm leading-7">
              <p><span className="text-fuchsia-300">const</span> <span className="text-sky-200">student</span> = {'{'}</p>
              <p className="pl-5"><span className="text-violet-200">name</span>: <span className="text-emerald-200">'Anica C. Cosares'</span>,</p>
              <p className="pl-5"><span className="text-violet-200">course</span>: <span className="text-emerald-200">'BSIT'</span>,</p>
              <p className="pl-5"><span className="text-violet-200">interests</span>: [</p>
              <p className="pl-10 text-emerald-200">'Web Development',</p>
              <p className="pl-10 text-emerald-200">'Programming',</p>
              <p className="pl-10 text-emerald-200">'Learning New Tech'</p>
              <p className="pl-5">],</p>
              <p className="pl-5"><span className="text-violet-200">mindset</span>: <span className="text-emerald-200">'Keep learning'</span></p>
              <p>{'}'};</p>
              <div className="mt-5 rounded-xl border border-violet-300/15 bg-violet-400/5 p-4 text-xs text-slate-400">
                <span className="text-violet-200">✦</span> Building skills one project at a time.
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-7 hidden rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl sm:block">
            <p className="text-xs text-slate-500">CURRENT FOCUS</p><p className="mt-1 text-sm font-semibold text-white">Web Development <span className="text-violet-300">↗</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20 border-t border-white/5">
      <div className="container-shell">
        <SectionHeading eyebrow="A little about me" title="Curious mind. Growing skills." description="I'm an IT student at Cavite State University – Tanza Campus. I enjoy learning how digital products are built, from writing code to planning clear and useful interfaces." />
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-slate-900/60 p-7 sm:p-9">
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-violet-400/10 text-violet-200"><Icon name="code" className="h-7 w-7" /></div>
            <h3 className="text-xl font-semibold text-white">My learning journey</h3>
            <p className="mt-4 leading-7 text-slate-400">I am developing my foundation in programming and web technologies through school activities and personal practice. My goal is to keep improving, create practical projects, and become a confident IT professional.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Problem solving', 'Creativity', 'Continuous learning'].map(item => <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">{item}</span>)}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Skills & technologies</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill, i) => <div key={skill.name} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-violet-300/30 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between gap-2"><h4 className="font-semibold text-slate-100">{skill.name}</h4><span className="text-xs text-violet-300">{String(i + 1).padStart(2, '0')}</span></div>
                <p className="mt-2 text-sm text-slate-500">{skill.level}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)
  return (
    <section id="projects" className="section-pad scroll-mt-20 border-t border-white/5 bg-slate-900/25">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Selected work" title="Projects & practice" description="A selection of practice projects and class design work. These samples represent the technologies and concepts I am learning." />
          <button onClick={() => setShowAll(!showAll)} className="mb-10 inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-300/5 sm:self-auto">
            {showAll ? 'Show less' : 'View all projects'} <Icon name="arrow" className={`h-4 w-4 transition ${showAll ? 'rotate-45' : ''}`} />
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map(project => (
            <article key={project.number} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-violet-300/25">
              <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 opacity-20"><div className="absolute left-8 top-8 h-20 w-20 rounded-2xl border border-white/50 rotate-12" /><div className="absolute right-12 bottom-5 h-24 w-24 rounded-full border border-white/40" /></div>
                <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-slate-950/40 text-white shadow-xl"><Icon name="code" className="h-8 w-8" /></div>
                <span className="absolute right-5 top-5 font-mono text-xs text-white/60">{project.number} / 04</span>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-[10px] font-bold tracking-[0.2em] text-violet-300">{project.type}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
                {expanded === project.number && <div className="mt-4 rounded-xl border border-violet-300/15 bg-violet-300/5 p-4 text-sm leading-6 text-slate-300">
                  <strong className="text-violet-200">Project note:</strong> This is a portfolio summary of a learning exercise. Add your actual screenshots, source-code repository, and final results when available.
                </div>}
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300">{tag}</span>)}</div>
                <button onClick={() => setExpanded(expanded === project.number ? null : project.number)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 hover:text-white">
                  {expanded === project.number ? 'Hide details' : 'View details'} <Icon name="arrow" className={`h-4 w-4 transition ${expanded === project.number ? 'rotate-45' : ''}`} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="section-pad scroll-mt-20 border-t border-white/5">
      <div className="container-shell">
        <SectionHeading eyebrow="Background" title="Education & resume" description="An overview of my current academic background and developing technical experience." />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Education</p>
            <div className="mt-6 border-l border-violet-300/30 pl-5">
              <div className="relative">
                <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full bg-violet-300 ring-4 ring-slate-950" />
                <h3 className="text-lg font-semibold text-white">Bachelor of Science in Information Technology</h3>
                <p className="mt-2 text-sm text-violet-200">Cavite State University – Tanza Campus</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Currently studying IT, with an interest in web development and programming.</p>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Experience</p>
              <h3 className="mt-4 font-semibold text-white">Academic and personal practice</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Coursework and practice projects involving web technologies, Java programming, XML, and basic application design.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-violet-950/20 p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Core strengths</p>
            <ul className="mt-6 space-y-4">
              {['Willingness to learn new technologies', 'Organizing information into clear interfaces', 'Practicing programming fundamentals', 'Working through errors and improving solutions'].map(item => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-300/10 text-emerald-200"><Icon name="check" className="h-3.5 w-3.5" /></span>{item}</li>)}
            </ul>
            <a href="/Anica-C-Cosares-CV.txt" download className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-100"><Icon name="download" className="h-4 w-4" /> Download CV</a>
            <p className="mt-3 text-xs leading-5 text-slate-500">Replace the sample CV text file in the public folder with your updated resume before submitting.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')
  const [noticeType, setNoticeType] = useState('success')

  function handleChange(event) {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
    setErrors(current => ({ ...current, [name]: '' }))
    setNotice('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setNoticeType('error')
      setNotice('Please fix the fields highlighted below.')
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    setNoticeType('success')
    setNotice('Your details are ready. Your email app will open so you can send the message.')
    window.location.href = `mailto:anica.cosares@example.com?subject=${subject}&body=${body}`
  }

  const fieldClass = 'mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10'
  return (
    <section id="contact" className="section-pad scroll-mt-20 border-t border-white/5 bg-slate-900/25">
      <div className="container-shell">
        <SectionHeading eyebrow="Get in touch" title="Let's connect." description="Have a question or want to talk about a project? Send a message using the form below." />
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-3xl border border-violet-300/15 bg-gradient-to-br from-violet-500/10 to-slate-900/60 p-7 sm:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-300/10 text-violet-200"><Icon name="mail" className="h-6 w-6" /></div>
            <h3 className="mt-5 text-xl font-semibold text-white">Contact information</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">You can reach out for school-related collaboration, feedback, or opportunities to learn.</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Email</p>
            <a href="mailto:anica.cosares@example.com" className="mt-2 inline-block break-all text-sm text-violet-200 hover:text-white">anica.cosares@example.com</a>
            <p className="mt-2 text-xs leading-5 text-slate-500">Demo placeholder — replace with your real email before publishing.</p>
          </div>
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-200">Your name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} className={fieldClass} placeholder="Enter your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                {errors.name && <p id="name-error" className="mt-2 text-xs text-rose-300">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-200">Email address</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={fieldClass} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
                {errors.email && <p id="email-error" className="mt-2 text-xs text-rose-300">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-slate-200">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className={`${fieldClass} resize-y`} placeholder="Write your message..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <p id="message-error" className="mt-2 text-xs text-rose-300">{errors.message}</p>}
            </div>
            {notice && <p role="status" className={`mt-4 rounded-xl px-4 py-3 text-sm ${noticeType === 'error' ? 'bg-rose-400/10 text-rose-200' : 'bg-emerald-400/10 text-emerald-200'}`}>{notice}</p>}
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400 sm:w-auto">Validate & prepare email <Icon name="arrow" className="h-4 w-4" /></button>
            <p className="mt-3 text-xs leading-5 text-slate-500">This demo validates fields and opens your default email app. It does not store or send messages to a server.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="border-t border-white/5 py-8"><div className="container-shell flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left"><p>© {new Date().getFullYear()} Anica C. Cosares. Student portfolio.</p><a href="#home" className="transition hover:text-violet-200">Back to top ↑</a></div></footer>
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
