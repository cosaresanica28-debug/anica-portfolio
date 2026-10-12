import { useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'WEB DEVELOPMENT',
    title: 'Student E-Portfolio',
    description:
      'A personal website presenting my background, technical skills, school projects, and contact information.',
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    number: '02',
    type: 'JAVA / PROGRAMMING',
    title: 'Login System Practice',
    description:
      'A beginner Java exercise focused on username and password handling and basic password validation.',
    tags: ['Java', 'OOP Basics', 'Validation'],
  },
  {
    number: '03',
    type: 'PYTHON / APPLICATION',
    title: 'Meal Suggestion Program',
    description:
      'A simple program that suggests meal ideas for breakfast, lunch, and dinner.',
    tags: ['Python', 'Conditionals', 'Functions'],
  },
  {
    number: '04',
    type: 'UI / UX DESIGN',
    title: 'Sales Interface Wireframe',
    description:
      'A sales screen concept featuring product search, product list, cart, quantity, payment, and checkout.',
    tags: ['Wireframing', 'UI/UX', 'Canva'],
  },
  {
    number: '05',
    type: 'WEB DEVELOPMENT',
    title: 'To-Do List App',
    description:
      'A simple task management app for adding, completing, and deleting tasks using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '06',
    type: 'WEB DEVELOPMENT',
    title: 'Calculator App',
    description:
      'A basic calculator that performs arithmetic operations using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

const skills = [
  { name: 'HTML', detail: 'Markup & structure' },
  { name: 'CSS', detail: 'Styling & layouts' },
  { name: 'Java', detail: 'Programming basics' },
  { name: 'XML', detail: 'Structured documents' },
  { name: 'ReactJS', detail: 'Currently learning' },
  { name: 'Tailwind CSS', detail: 'Currently learning' },
]

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Resume', '#resume'],
  ['Contact', '#contact'],
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline h-4 w-4"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-stone-600">{description}</p>
      )}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#faf9f6]/95 backdrop-blur">
      <nav
        className="container-shell flex min-h-[72px] items-center justify-between gap-5"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-stone-900"
          onClick={() => setOpen(false)}
        >
          Anica<span className="text-amber-700">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-stone-600 transition hover:text-stone-950"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-800"
          >
            Get in touch <ArrowIcon />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone-200 bg-[#faf9f6] px-5 py-3 md:hidden">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-sm text-stone-700 hover:bg-stone-100"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-stone-200">
      <div className="container-shell grid min-h-[590px] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:py-24">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
            E-Portfolio · 2026
          </p>

          <p className="mb-3 text-lg text-stone-600">Hello, I'm</p>

          <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            Anica C. <span className="font-serif italic text-amber-800">Cosares.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            A BS Information Technology student at Cavite State University —
            Tanza Campus. Interested in web development and programming,
            building my skills one project at a time.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-800"
            >
              View My Work <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-white"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-stone-200 pt-5 text-sm text-stone-600">
            <span>BS Information Technology</span>
            <span>Cavite State University — Tanza Campus</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-amber-100/70 blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-stone-200 bg-[#f1eee7] p-7 sm:p-9">
            <div className="flex items-center justify-between border-b border-stone-300 pb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                A little introduction
              </span>
              <span className="font-serif text-2xl italic text-amber-800">AC</span>
            </div>

            <p className="mt-8 font-serif text-3xl leading-snug text-stone-900">
              Curiosity makes room for creativity.
            </p>
            <p className="mt-5 leading-7 text-stone-600">
              Learning, experimenting, and turning ideas into practical digital
              experiences — one step at a time.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-stone-200 bg-white/70 p-4">
                <p className="font-serif text-2xl text-stone-900">01</p>
                <p className="mt-1 text-xs text-stone-500">Keep learning</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white/70 p-4">
                <p className="font-serif text-2xl text-stone-900">02</p>
                <p className="mt-1 text-xs text-stone-500">Build with purpose</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="A short story."
          description="A little description about who I am, what I enjoy learning, and the kind of work I hope to create."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div className="max-w-2xl space-y-5 leading-8 text-stone-600">
            <p>
              I am Anica C. Cosares, a Bachelor of Science in Information
              Technology student at Cavite State University — Tanza Campus.
              I am learning to turn classroom concepts into practical skills
              through coding exercises and school projects.
            </p>
            <p>
              My interests include web development and programming. I enjoy
              exploring how websites and applications work, solving small
              coding problems, and improving my work as I learn new technologies.
            </p>
            <p>
              Each project is an opportunity to practice, learn from mistakes,
              and grow as a future IT professional.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white/70 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Skills
            </p>
            <h3 className="mt-2 font-serif text-2xl text-stone-900">
              What I'm learning & doing.
            </h3>
            <div className="mt-6 divide-y divide-stone-200">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-medium text-stone-900">{skill.name}</span>
                  <span className="text-right text-sm text-stone-500">
                    {skill.detail}
                  </span>
                </div>
              ))}
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
  const visibleProjects = projects

  return (
    <section
      id="projects"
      className="section-pad scroll-mt-20 border-y border-stone-200 bg-[#f1eee7]/65"
    >
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="My projects."
            description="A few school and practice projects that represent what I have been learning."
          />

          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="mb-10 inline-flex shrink-0 items-center gap-2 self-start border-b border-stone-400 pb-1 text-sm font-medium text-stone-800 transition hover:text-amber-800 sm:self-auto"
          >
            {showAll ? 'Show fewer projects' : 'View all projects'} <ArrowIcon />
          </button>
        </div>

        <div className="grid gap-x-7 gap-y-8 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article key={project.number} className="border-t border-stone-300 pt-5">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-stone-500">
                  {project.type}
                </p>
                <span className="font-serif text-2xl text-amber-800">
                  {project.number}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-stone-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-300 px-3 py-1.5 text-xs text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {expanded === project.number && (
                <div className="mt-5 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-stone-600">
                  <p className="font-semibold text-stone-900">Project details</p>
                  <p className="mt-2">
                    Add a real project link or screenshot here if available.
                    Make sure this description reflects the work you completed.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() =>
                  setExpanded(expanded === project.number ? null : project.number)
                }
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-900 hover:text-stone-950"
                aria-expanded={expanded === project.number}
              >
                {expanded === project.number ? 'Hide details' : 'View details'}
                <ArrowIcon />
              </button>
            </article>
          ))}
        </div>

        <p className="mt-12 border-t border-stone-300 pt-5 text-sm text-stone-500">
          More projects coming soon...
        </p>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="section-pad scroll-mt-20">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Resume"
            title="Education & experience."
            description="An overview of my academic background and learning experience so far."
          />
          <a
            href="/Anica-C-Cosares-CV.txt"
            download
            className="mb-10 inline-flex items-center gap-2 self-start border-b border-stone-400 pb-1 text-sm font-medium text-stone-800 hover:text-amber-800 sm:self-auto"
          >
            Download CV <ArrowIcon />
          </a>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Education
            </p>
            <div className="space-y-8 border-l border-stone-300 pl-6">
              <div className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-amber-800 ring-4 ring-[#faf9f6]" />
                <p className="text-sm text-stone-500">Present</p>
                <h3 className="mt-1 text-lg font-semibold text-stone-900">
                  BS Information Technology
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Cavite State University — Tanza Campus
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-stone-400 ring-4 ring-[#faf9f6]" />
                <p className="text-sm text-stone-500">Previous studies</p>
                <h3 className="mt-1 text-lg font-semibold text-stone-900">
                  Senior High School
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                 Southern Philippines Institute of Science and Technology (SPIST) · Graduated in 2024
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white/70 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Experience & practice
            </p>
            <h3 className="mt-4 font-serif text-2xl text-stone-900">
              Learning by doing.
            </h3>
            <p className="mt-4 leading-7 text-stone-600">
              My current experience includes academic exercises and practice
              projects involving HTML, CSS, Java, XML, Python, and introductory
              web development.
            </p>
            <div className="mt-6 border-t border-stone-200 pt-5">
              <p className="text-sm font-semibold text-stone-900">
                Strengths I'm developing
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-600">
                <li>— Problem-solving and debugging</li>
                <li>— Learning new tools and technologies</li>
                <li>— Building clear, useful interfaces</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs leading-5 text-stone-500">
          Update the education details and CV file with your accurate
          information before submitting.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')
  const [noticeType, setNoticeType] = useState('success')

  // Palitan ito ng totoong email address mo.
  const contactEmail = 'cosaresanica28@gmail.com'
  const githubLink = 'https://github.com/cosaresanica28-debug'

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setNotice('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      setNoticeType('error')
      setNotice('Please check the highlighted fields.')
      return
    }

    if (contactEmail === 'cosaresanica28@gmail.com') {
      setNoticeType('error')
      setNotice('Replace cosaresanica28@gmail.com in App.jsx with your email address first.')
      return
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )

    setNoticeType('success')
    setNotice('Your email app will open so you can send your message.')
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  const fieldClass =
    'mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/10'

  return (
    <section
      id="contact"
      className="section-pad scroll-mt-20 border-t border-stone-200 bg-[#f1eee7]/65"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk."
          description="I'm open to learning opportunities, school collaborations, project feedback, or a friendly hello."
        />

        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h3 className="text-xl font-semibold text-stone-900">Get in touch.</h3>
            <p className="mt-3 max-w-sm leading-7 text-stone-600">
              Feel free to send a message using the form. You can also add your
              professional and social links here.
            </p>

            <div className="mt-8 border-t border-stone-300 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                Email
              </p>
              <p className="mt-2 break-all text-stone-800">
                cosaresanica28@gmail.com
              </p>
            </div>

            <div className="mt-5 border-t border-stone-300 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                Links
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Add your GitHub or other public profile URLs when ready.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-stone-200 bg-[#faf9f6] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-stone-800">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Enter your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-700">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-stone-800">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-700">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-stone-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y`}
                placeholder="Write your message..."
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-700">{errors.message}</p>
              )}
            </div>

            {notice && (
              <p
                role="status"
                className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                  noticeType === 'error'
                    ? 'bg-red-50 text-red-800'
                    : 'bg-emerald-50 text-emerald-800'
                }`}
              >
                {notice}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-800"
            >
              Send a message <ArrowIcon />
            </button>

            <p className="mt-3 text-xs leading-5 text-stone-500">
              This form validates required fields and opens your default email
              app. It does not store messages on a server.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 py-7">
      <div className="container-shell flex flex-col items-center justify-between gap-3 text-center text-xs text-stone-500 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Anica C. Cosares · Student E-Portfolio</p>
        <a href="#home" className="transition hover:text-amber-800">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#faf9f6] text-stone-900">
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
