import './App.css'
import React from 'react'
import { useMemo, useState } from 'react'

function App() {
  const navItems = ['About', 'Partners', 'Calendar', 'Contact']
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const [openRoundId, setOpenRoundId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showAllRounds, setShowAllRounds] = useState(false)

  const aboutParagraphs = useMemo(
    () => [
      'My name is Jan Lakota, and I first sat in a kart in 2018 at the age of 6. What started as an early passion quickly grew into something more serious, and by the age of 12 I committed to karting professionally.',
      'From that moment on, I dedicated myself fully to improving every aspect of my driving. I trained consistently, gaining experience through testing, practice sessions, and competitive racing. Step by step, I developed the pace, discipline, and mindset required to perform at a higher level.',
      'In 2026, I made my debut in the Rotax Max Challenge Poland in the Junior Max category. During my first full season, which is still ongoing, I have already secured a major achievement by winning a ticket to the International Finals by Rotax Racing Club, held at the new Silverstone Circuit.',
      'Since turning professional, I continue to push my limits, focusing on progression and results while competing and preparing for bigger challenges ahead. My journey in motorsport is still just beginning, and I am determined to keep advancing toward the highest levels of racing.',
    ],
    [],
  )

  const seasonRounds = [
    {
      id: 1,
      label: 'Round I',
      dateRange: 'March 19-22',
      location: 'Bilgoraj',
      trackLength: '1201 m',
      eventName: 'RMC Poland R1',
      status: 'finished',
      results: [
        'Qualifying: P5 (technical exclusion)',
        'Heat 1: P5',
        'Heat 2: P9',
        'Heat 3: P11',
        'Final: DSQ (incident exclusion)',
      ],
    },
    {
      id: 2,
      label: 'Round II',
      dateRange: 'April 9-12',
      location: 'Trinec',
      trackLength: '1234 m',
      eventName: 'RMC Poland R2',
      status: 'finished',
      results: [
        'Qualifying: DSQ (technical non-compliance)',
        'Heat 1: P9',
        'Heat 2: P10',
        'Heat 3: P10',
        'Final: P9',
      ],
    },
    {
      id: 3,
      label: 'Round III',
      dateRange: 'April 23-26',
      location: 'Torun',
      trackLength: '850 m',
      eventName: 'RMC Poland R3',
      status: 'finished',
      results: ['Qualifying: P7', 'Heat 1: P7', 'Heat 2: DNF', 'Heat 3: P8', 'Final: P7'],
    },
    {
      id: 4,
      label: 'Round IV',
      dateRange: 'June 11-14',
      location: 'Bydgoszcz',
      trackLength: '1017 m',
      eventName: 'RMC Poland R4',
      status: 'scheduled',
    },
    {
      id: 5,
      label: 'Round V',
      dateRange: 'July 23-26',
      location: 'Slomczyn',
      trackLength: '1208 m',
      eventName: 'RMC Poland R5',
      status: 'scheduled',
    },
    {
      id: 6,
      label: 'Round VI',
      dateRange: 'August 20-23',
      location: 'Poznan',
      trackLength: '1509 m',
      eventName: 'RMC Poland R6',
      status: 'scheduled',
    },
    {
      id: 7,
      label: 'Round VII',
      dateRange: 'September 24-27',
      location: 'Bilgoraj',
      trackLength: '1201 m',
      eventName: 'RMC Poland R7',
      status: 'scheduled',
    },
  ]

  return (
    <div className="site-shell">
      {/* SIDEBAR */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button
          className="sidebar-close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setSidebarOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <header className="floating-nav-wrap">
        <nav className="floating-nav">
          <a className="brand" href="#hero" aria-label="Jan Lakota home">
            <img className="brand-logo" src="/media/logo.png" alt="JL" />
          </a>
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
          <button
            className="hamburger"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hero-image-panel">
            <img src="/media/hero.jpeg" alt="Jan Lakota karting" />
          </div>
          <div className="hero-copy-panel">
            <span className="eyebrow">Professional Karting Driver</span>
            <h1>
              Jan
              <span className="last-name">Lakota</span>
            </h1>
            <p>Racing driver from Poland focused on consistency, pace and growth.</p>
            <div className="hero-actions">
              <a href="#calendar" className="btn-primary">View Calendar</a>
              <a href="#contact" className="btn-ghost">Contact</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-grid">
            <div className="about-copy">
              <span className="section-label">01 — My Story</span>
              <h2 className="section-title">
                About
                <br />
                Me
              </h2>
              <div className={`about-text ${isAboutExpanded ? 'expanded' : 'collapsed'}`}>
                {(isAboutExpanded ? aboutParagraphs : aboutParagraphs.slice(0, 2)).map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ),
                )}
              </div>
              <button
                type="button"
                className="read-more-btn"
                onClick={() => setIsAboutExpanded((prev) => !prev)}
              >
                {isAboutExpanded ? 'Read less' : 'Read more'}
              </button>
            </div>

            <div className="about-card">
              <img
                className="about-card-photo"
                src="/media/about_me.jpeg"
                alt="Jan Lakota racing in kart"
              />
              <div className="about-card-body">
                <p className="about-card-name">
                  Jan <span>Lakota</span>
                </p>
                <span className="about-card-sub">Poland · Junior Max Driver</span>
                <div className="about-stats">
                  <div className="stat">
                    <div className="stat-value">8</div>
                    <div className="stat-label">Years Karting</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">P7</div>
                    <div className="stat-label">Best Finish</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">3</div>
                    <div className="stat-label">2026 Rounds</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">1</div>
                    <div className="stat-label">Intl. Finals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="partners-section" id="partners">
          <div className="partners-inner">
            <span className="section-label">Collaboration</span>
            <h2 className="section-title">Partners</h2>
            <div className="partners-grid">
              <div className="partners-photo">
                <img src="/media/calendar.jpeg" alt="Jan Lakota on track" />
              </div>
              <div className="partner-cards">
                <div className="partner-card">
                  <img
                    className="partner-card-logo"
                    src="/media/l-managment.jpeg"
                    alt="L-Management"
                  />
                  <div className="partner-card-info">
                    <h3>L-Management</h3>
                    <span className="partner-type">Main Sponsor</span>
                    <p>
                      Primary sponsor supporting Jan&apos;s racing campaign and professional
                      development.
                    </p>
                  </div>
                </div>
                <div className="partner-card">
                  <img
                    className="partner-card-logo"
                    src="/media/dubbyjpeg.jpeg"
                    alt="Dubby Energy"
                  />
                  <div className="partner-card-info">
                    <h3>Dubby Energy</h3>
                    <span className="partner-type">Sponsor</span>
                    <p>
                      Energy drink partner keeping Jan focused and performing at his best on
                      track.
                    </p>
                  </div>
                </div>
                <div className="partner-card">
                  <img
                    className="partner-card-logo"
                    src="/media/aimotor.png"
                    alt="Aimotor"
                  />
                  <div className="partner-card-info">
                    <h3>Aimotor</h3>
                    <span className="partner-type">Technical Partner</span>
                    <p>
                      AI-powered technical partner providing data analysis and performance
                      engineering support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALENDAR */}
        <section className="calendar-section" id="calendar">
          <span className="section-label">Season</span>
          <div className="calendar-hero-row">
            <div>
              <h2 className="section-title">
                2026
                <br />
                Season
              </h2>
            </div>
            <div className="calendar-hero-img">
              <img src="/media/about_me.jpeg" alt="Jan Lakota 2026 season" />
            </div>
          </div>

          <ul className="calendar-rounds-list">
            {(showAllRounds ? seasonRounds : seasonRounds.slice(0, 3)).map((round) => {
              const isOpen = openRoundId === round.id
              return (
                <li key={round.id} className={`calendar-round ${isOpen ? 'open' : ''}`}>
                  <div className="calendar-round-top">
                    <div className="calendar-round-left">
                      <strong>{round.label}</strong>
                      <span>
                        {round.location} · {round.trackLength}
                      </span>
                      <span>{round.dateRange}</span>
                    </div>
                    <div className="calendar-round-right">
                      <strong>{round.eventName}</strong>
                      <span className={`status-pill ${round.status}`}>{round.status}</span>
                      {round.status === 'finished' ? (
                        <button
                          type="button"
                          className="results-btn"
                          onClick={() => setOpenRoundId(isOpen ? null : round.id)}
                        >
                          {isOpen ? 'Hide results' : 'View results +'}
                        </button>
                      ) : null}
                    </div>
                  </div>
                  {isOpen && round.results ? (
                    <div className="calendar-results">
                      <h4>Jan Lakota — RMC Poland 2026</h4>
                      <p>
                        {round.label} · {round.location} ({round.dateRange})
                      </p>
                      <ul>
                        {round.results.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
          <button
            type="button"
            className="view-all-btn"
            onClick={() => setShowAllRounds((prev) => !prev)}
          >
            {showAllRounds ? '↑ Show less' : `View all ${seasonRounds.length} rounds ↓`}
          </button>
        </section>



        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-card">
            <span className="section-label">Get in Touch</span>
            <h2>
              Let&apos;s Build
              <br />
              the Next Win
            </h2>
            <p>
              For sponsorships, partnerships, and media requests, reach out via email.
            </p>
            <a href="mailto:jl.racing12driver@gmail.com" className="btn-primary">
              jl.racing12driver@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
