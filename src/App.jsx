import React, { useMemo } from 'react'

// Inline animated SVG primitives and global animation styles
const AnimatedStyles = () => (
  <style>{`
    .sparkle { animation: sparkle 2.6s ease-in-out infinite; }
    @keyframes sparkle { 0%,100% { transform: scale(1); opacity: .9 } 50% { transform: scale(1.08) rotate(3deg); opacity: 1 } }

    .pulse-dot { animation: pulse 2.4s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { opacity: .4; transform: scale(.9) } 50% { opacity: 1; transform: scale(1.15) } }

    .dash { stroke-dasharray: 380; stroke-dashoffset: 380; animation: dash 2.8s ease-in-out infinite; fill: none; }
    @keyframes dash { 0% { stroke-dashoffset: 380 } 50% { stroke-dashoffset: 0 } 100% { stroke-dashoffset: 380 } }

    .float { animation: float 3s ease-in-out infinite; }
    .float-delayed { animation: float 3.6s ease-in-out .4s infinite; }
    @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-4px) } }

    .flash { animation: flash 2s ease-in-out infinite; }
    @keyframes flash { 0%,100% { opacity: .85 } 50% { opacity: 1 } }

    .fade-in { animation: fadein .8s ease forwards; opacity: 0 }
    @keyframes fadein { to { opacity: 1 } }
  `}</style>
)

const Sparkle = ({ className = 'w-6 h-6', color = '#2563eb' }) => (
  <svg className={className + ' sparkle'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L13.2 7.2 L17.5 8.5 L13.2 9.8 L12 14 L10.8 9.8 L6.5 8.5 L10.8 7.2 Z" fill={color} opacity="0.15"/>
      <circle cx="4" cy="4" r="1"/>
      <circle cx="20" cy="6" r="1"/>
      <circle cx="6" cy="20" r="1"/>
    </g>
  </svg>
)

const PulseDot = ({ className = 'w-3 h-3', color = '#22d3ee' }) => (
  <svg className={className + ' pulse-dot'} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="5" cy="5" r="3" fill={color} />
  </svg>
)

const GrowingArrow = ({ className = 'w-10 h-10', stroke = '#0ea5e9' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path className="dash" d="M6 34 C14 30, 20 26, 28 20 C34 16, 38 12, 42 8" />
      <path d="M30 10 L42 8 L40 20" fill="none"/>
    </g>
  </svg>
)

const Shield = ({ className = 'w-10 h-10', stroke = '#111827' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4 L40 10 V22 C40 34 32 40 24 44 C16 40 8 34 8 22 V10 Z"/>
      <path className="float" d="M18 26 L22 30 L30 20"/>
    </g>
  </svg>
)

const HeartHandshake = ({ className = 'w-10 h-10', stroke = '#111827' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42 C24 42 6 30 6 18 C6 11 11 6 18 6 C22 6 24 8 24 8 C24 8 26 6 30 6 C37 6 42 11 42 18 C42 30 24 42 24 42Z"/>
      <path className="float" d="M16 22 L22 24 L28 20 L32 22"/>
    </g>
  </svg>
)

const Lightning = ({ className = 'w-10 h-10', stroke = '#111827' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path className="flash" d="M26 4 L10 28 H22 L20 44 L38 20 H26 Z"/>
    </g>
  </svg>
)

const Layers = ({ className = 'w-10 h-10', stroke = '#111827' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6 L42 14 L24 22 L6 14 Z"/>
      <path className="float" d="M24 18 L42 26 L24 34 L6 26 Z"/>
      <path className="float-delayed" d="M24 30 L42 38 L24 46 L6 38 Z"/>
    </g>
  </svg>
)

const LineProgress = ({ className = 'w-full h-24' }) => (
  <svg className={className} viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0ea5e9"/>
        <stop offset="100%" stopColor="#6366f1"/>
      </linearGradient>
    </defs>
    <path className="dash" d="M10 100 C100 10, 200 110, 300 60 C400 10, 500 110, 590 20" stroke="url(#grad)" strokeWidth="4" strokeLinecap="round"/>
  </svg>
)

const Mail = ({ className = 'w-10 h-10', stroke = '#111827' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="36" height="28" rx="4"/>
      <path className="dash" d="M8 14 L24 26 L40 14"/>
    </g>
  </svg>
)

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-3xl mx-auto text-center">
    {eyebrow && (
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
        <PulseDot /> <span>{eyebrow}</span>
      </div>
    )}
    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
)

export default function App() {
  const nav = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'why', label: 'Why Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ], [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <AnimatedStyles />

      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkle className="w-6 h-6" />
            <span className="font-extrabold tracking-tight text-slate-900">Toqopin</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-slate-600 hover:text-slate-900 transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo('contact')} className="hidden sm:inline-flex bg-slate-900 text-white px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-all">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12),transparent_40%)]"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 bg-white shadow-sm">
                Friendly tech for beginners <PulseDot />
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                Digital Growth for Every Qoper — From Zero to Hero.
              </h1>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                Toqopin is a digital service brand from Indonesia helping small and growing businesses start, scale, and shine online with clarity, education, and cost-efficient execution.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button onClick={() => scrollTo('contact')} className="bg-slate-900 text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-lg transition-all">Get Started</button>
                <button onClick={() => scrollTo('contact')} className="px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-900 hover:text-slate-900 transition-colors">Contact Toqopin</button>
              </div>
              <div className="mt-10">
                <LineProgress />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6">
                <Sparkle />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400/10 to-indigo-500/10 border border-slate-200 flex items-center justify-center">
                      <GrowingArrow />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Transformation Flow</p>
                      <p className="font-semibold text-slate-900">Zero → Hero</p>
                    </div>
                  </div>
                  <PulseDot />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Plan', Icon: Layers },
                    { label: 'Build', Icon: Lightning },
                    { label: 'Grow', Icon: HeartHandshake },
                  ].map(({ label, Icon }) => (
                    <div key={label} className="rounded-xl border border-slate-200 p-4 bg-white hover:shadow-md transition-shadow">
                      <Icon className="w-12 h-12" />
                      <p className="mt-3 text-sm text-slate-600">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="About Toqopin"
            title="Built for Qopers who want real progress without stress"
            subtitle="We help beginners start and grow digitally with education-first guidance, transparent workflows, and efficient cost allocation — so every step makes sense."
          />

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Beginner-first support',
                desc: 'Clear, jargon-free explanations and hand-held onboarding so you always know what comes next.',
                Icon: HeartHandshake,
              },
              {
                title: 'Cost-efficient growth',
                desc: 'Smart prioritization and modular builds that fit your current stage and budget.',
                Icon: Lightning,
              },
              {
                title: 'Education & guidance',
                desc: 'We teach while we build — giving you confidence and the knowledge to sustain momentum.',
                Icon: Layers,
              },
              {
                title: 'Transparent by design',
                desc: 'Simple timelines, clear deliverables, and honest reporting for every Qoper.',
                Icon: Shield,
              },
            ].map(({ title, desc, Icon }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-white">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Services for Qopers"
            title="Digital solutions that meet you where you are"
            subtitle="From technical foundations to daily operations, we combine human understanding with modern tools to move you forward."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'IT Consulting & System Development',
                desc: 'Practical architecture, clean code, and scalable systems tailored to your stage.',
                Icon: Layers,
              },
              {
                title: 'Social Media Optimization & Content Strategy',
                desc: 'Plan, optimize, and measure the content that actually matters to your audience.',
                Icon: Sparkle,
              },
              {
                title: 'Digital Operation Support',
                desc: 'Hands-on assistance to streamline workflows, tools, and day-to-day execution.',
                Icon: Lightning,
              },
              {
                title: 'Startup‑Friendly Tech Guidance',
                desc: 'Make better choices faster with lightweight, beginner-friendly direction.',
                Icon: HeartHandshake,
              },
            ].map(({ title, desc, Icon }) => (
              <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-slate-200 flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <PulseDot />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="How Toqopin Works"
            title="A clear, beginner-friendly path to results"
            subtitle="Every engagement follows a transparent, education-first flow — so you always know the why behind the what."
          />

          <div className="mt-12 relative">
            <div className="absolute left-0 right-0 -top-6 opacity-80">
              <LineProgress />
            </div>
            <ol className="relative grid md:grid-cols-5 gap-6">
              {[
                { t: 'Qoper Onboarding', d: 'Tell us your goals and current challenges.' },
                { t: 'Analysis & Plan', d: 'We build a roadmap you can understand.' },
                { t: 'Execution', d: 'Development, optimization, content — prioritized for impact.' },
                { t: 'Education & Reporting', d: 'Learn what’s happening and why, every step.' },
                { t: 'Growth & Expansion', d: 'Scale what works with confidence.' },
              ].map((s, i) => (
                <li key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-500">{String(i+1).padStart(2,'0')}</span>
                    <PulseDot />
                  </div>
                  <h4 className="mt-3 font-semibold text-slate-900">{s.t}</h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why Qopers Choose Us"
            title="Friendly, transparent, and designed for progress"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Cost efficient', d: 'Efficiency-first plans that grow with you.', Icon: Lightning },
              { t: 'Beginner friendly', d: 'We explain everything in simple language.', Icon: HeartHandshake },
              { t: 'Transparent workflow', d: 'Clear steps and reporting from day one.', Icon: Shield },
              { t: 'Long‑term partnership', d: 'We’re here for the journey, not a one‑off task.', Icon: HeartHandshake },
              { t: 'Zero → Hero methodology', d: 'From foundations to growth with measurable milestones.', Icon: GrowingArrow },
              { t: 'Human + tech hybrid', d: 'Expert support powered by modern tools.', Icon: Layers },
            ].map(({ t, d, Icon }) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Qopers say"
            subtitle="Fictional stories from small businesses who grew with Toqopin."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[ 
              {
                name: 'Rina — Coffee Cart Owner',
                quote: 'Toqopin turned our confusing tech to a calm plan. We finally understand what to do online and why.'
              },
              {
                name: 'Dimas — Local Print Studio',
                quote: 'Clear, friendly, and fast. We grew our social presence without burning budget.'
              },
              {
                name: 'Ayu — Handmade Shop',
                quote: 'They teach while they build. Now our team can manage content confidently.'
              }
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-500/20 border border-slate-200 flex items-center justify-center">
                    <Sparkle />
                  </div>
                  <figcaption className="text-sm font-medium text-slate-900">{t.name}</figcaption>
                </div>
                <blockquote className="mt-3 text-slate-700 leading-relaxed">“{t.quote}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s start your Zero → Hero journey"
            subtitle="Tell us a bit about your goals. We’ll reply with simple next steps and options that fit your stage."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm text-slate-600">Name</label>
                  <input className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="name@email.com" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">What do you need?</label>
                  <select className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                    <option>IT Consulting & Development</option>
                    <option>Social Media & Content</option>
                    <option>Digital Operations</option>
                    <option>Startup Tech Guidance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-slate-600">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Tell us about your goals"></textarea>
                </div>
                <button type="button" className="mt-2 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-lg transition-all">Send Message</button>
              </div>
            </form>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Mail />
                  <h3 className="font-semibold text-slate-900">Reach Toqopin</h3>
                </div>
                <p className="mt-3 text-slate-600 text-sm">We reply within 1–2 working days.</p>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg border border-slate-200">📧</span>
                    <a href="mailto:hello@toqopin.id" className="text-slate-700 hover:underline">hello@toqopin.id</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg border border-slate-200">🟢</span>
                    <a href="#" className="text-slate-700 hover:underline">WhatsApp: +62 812-0000-0000</a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <LineProgress />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Sparkle /> <span>Toqopin — from zero to hero</span>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Toqopin. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
