import { useState } from 'react'
import './style.css'

const normalizeTitle = (id) => {
  const titleMap = {
    demo: 'WHO UX Research Access Request',
  }
  return titleMap[id] || id
}

const App = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, id: '', title: '', content: '' })

  const openModal = (id) => {
    const content = id === 'demo'
      ? 'Request access to WHO information, digital health guidance, and UX research support for the Appointment Booking and Laboratory Scheduling platform.'
      : `This is a placeholder modal for ${normalizeTitle(id)}. Replace this text with full modal details if needed.`

    setModalInfo({
      isOpen: true,
      id,
      title: normalizeTitle(id),
      content,
    })
  }

  const closeModal = () => setModalInfo({ isOpen: false, id: '', title: '', content: '' })
  const closeModalOnBg = (event) => {
    if (event.target === event.currentTarget) closeModal()
  }

  const scrollToSection = (event, id) => {
    if (event?.preventDefault) {
      event.preventDefault()
    }
    const section = document.getElementById(id) || document.querySelector(`[name="${id}"]`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <div className="app">
      <nav>
        <div className="nav-logo">
          ⬡ UX-ICD
          <span>Appointment Booking Experience</span>
        </div>
        <ul className="nav-links">
          <li><a href="#overview" onClick={(event) => scrollToSection(event, 'overview')}>Overview</a></li>
          <li><a href="#users" onClick={(event) => scrollToSection(event, 'users')}>Users</a></li>
          <li><a href="#journey" onClick={(event) => scrollToSection(event, 'journey')}>Journey</a></li>
          <li><a href="#screens" onClick={(event) => scrollToSection(event, 'screens')}>Screens</a></li>
          <li><a href="#metrics" onClick={(event) => scrollToSection(event, 'metrics')}>Metrics</a></li>
        </ul>
        <button className="nav-cta" onClick={() => openModal('demo')}>Request Access</button>
      </nav>

      <div className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>

        <div className="hero-badge">
          <span className="badge-dot"></span>
          UX INTERFACE CONTROL DOCUMENT · Version 1.0
        </div>

        <h1>
          <span className="line-dim">Patient Appointment &</span><br />
          <span className="line-teal">Laboratory Booking</span><br />
          <span className="line-dim">Experience</span>
        </h1>

        <p className="hero-sub">
          A UX-driven direction for Saudi private healthcare, focused on booking efficiency, accessibility, and measurable patient experience success.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => openModal('demo')}>Request WHO Access</button>
          <button className="btn-ghost" onClick={(event) => scrollToSection(event, 'overview')}>View UX Direction</button>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-value">Project</span>
            <span className="stat-label">Booking Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Client</span>
            <span className="stat-label">Saudi Healthcare</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Prepared By</span>
            <span className="stat-label">Musa Imran</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Goal</span>
            <span className="stat-label">Faster Bookings</span>
          </div>
        </div>
      </div>

      <section className="flow-section architecture-section" id="overview">
        <div className="flow-container">
          <div className="architecture-banner reveal">
            <div className="section-label">1. Document Purpose</div>
            <div className="section-title">UX Interface Control Document</div>
            <p className="section-desc">Defines the user experience requirements, interaction rules, interface behaviors, accessibility standards, and workflow controls for appointment and laboratory booking.</p>
            <div className="tech-pill-row">
              {['Simplicity', 'Visibility', 'Consistency', 'Accessibility', 'Scalability'].map((pill) => (
                <span key={pill} className="tech-pill">{pill}</span>
              ))}
            </div>
          </div>

          <div className="architecture-grid reveal">
            <div className="architecture-panel">
              <div className="arch-summary">
                <span className="arch-kicker">Business Objective</span>
                <p>Reduce booking time, improve completion rates, increase digital adoption, and enhance patient satisfaction while lowering support workload.</p>
              </div>

              <div className="arch-feature-row">
                {[
                  { title: 'Missed appointments', text: 'Address friction points that lead to booking abandonment and confusion.' },
                  { title: 'High support load', text: 'Simplify digital self-service to reduce call center dependency.' },
                  { title: 'Long booking processes', text: 'Streamline every step with clear guidance and fast actions.' },
                  { title: 'Low adoption', text: 'Make the platform intuitive for both Arabic and English users.' },
                ].map((item) => (
                  <div key={item.title} className="arch-feature-card">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="architecture-canvas">
              <div className="architecture-map">
                {[
                  { position: 'top', label: 'Project', title: 'Appointment Booking', chips: ['UX-ICD', 'Patient Journey'] },
                  { position: 'left', label: 'Client', title: 'Private Healthcare', chips: ['Saudi Arabia', 'Local Standards'] },
                  { position: 'center', label: 'Prepared By', title: 'Musa Imran', chips: ['Product Designer', 'UX Researcher'] },
                  { position: 'right', label: 'Objective', title: 'Reduce Abandonment', chips: ['40% Faster', 'Increased Adoption'] },
                  { position: 'bottom', label: 'Scope', title: 'Appointment + Lab', chips: ['Booking', 'Confirmation'] },
                ].map((node) => (
                  <div key={node.label} className={`arch-node arch-node-${node.position}`}>
                    <div className="node-label">{node.label}</div>
                    <div className="node-title">{node.title}</div>
                    <div className="node-chip-row">
                      {node.chips.map((chip) => <span key={chip} className="arch-chip">{chip}</span>)}
                    </div>
                  </div>
                ))}

                <div className="arch-line arch-line-vertical"></div>
                <div className="arch-line arch-line-horizontal-left"></div>
                <div className="arch-line arch-line-horizontal-right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="users">
        <div className="reveal">
          <div className="section-label">3. User Groups</div>
          <div className="section-title">Primary, Secondary, Tertiary Users</div>
          <p className="section-desc">Capture patient, reception, and administrator needs for the appointment booking experience.</p>
        </div>

        <div className="cards-grid reveal">
          {[
            { icon: '👤', tag: 'Primary User', title: 'Patients', text: 'Quick appointment booking, doctor discovery, lab scheduling, and confirmation.' },
            { icon: '🧑‍💼', tag: 'Secondary User', title: 'Reception Officers', text: 'Schedule management, booking confirmation, and rescheduling support.' },
            { icon: '📈', tag: 'Tertiary User', title: 'Administrators', text: 'Monitor booking volume, patient flow, and operational efficiency.' },
          ].map((user) => (
            <div key={user.title} className="card" onClick={() => openModal(user.title)}>
              <div className="card-icon">{user.icon}</div>
              <div className="card-tag">{user.tag}</div>
              <h3>{user.title}</h3>
              <p>{user.text}</p>
              <div className="card-arrow">View user goals →</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="journey">
        <div className="reveal">
          <div className="section-label">4. User Journey</div>
          <div className="section-title">Patient Booking Journey</div>
          <p className="section-desc">A four-stage booking workflow that prioritizes discovery, selection, scheduling, and confirmation.</p>
        </div>

        <div className="architecture-grid reveal">
          {[
            { stage: 'Stage 1', title: 'Patient lands on booking platform', goal: 'Find healthcare service.', response: 'Display service categories.', metric: 'Service discovered within 10 seconds.' },
            { stage: 'Stage 2', title: 'Patient selects specialty', goal: 'Find appropriate physician.', response: 'Display available doctors.', metric: 'Selection completed without assistance.' },
            { stage: 'Stage 3', title: 'Patient chooses appointment slot', goal: 'Schedule visit.', response: 'Show available dates and times.', metric: 'Booking completion rate above 90%.' },
            { stage: 'Stage 4', title: 'Patient confirms booking', goal: 'Receive confirmation.', response: 'Display success screen and send SMS.', metric: 'Confirmation delivered within 30 seconds.' },
          ].map((stage) => (
            <div key={stage.stage} className="arch-feature-card">
              <h4>{stage.stage}</h4>
              <p><strong>User Goal:</strong> {stage.goal}</p>
              <p><strong>System Response:</strong> {stage.response}</p>
              <p><strong>Success Metric:</strong> {stage.metric}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="screens">
        <div className="reveal">
          <div className="section-label">6. Screen Specifications</div>
          <div className="section-title">Appointment & Confirmation Screens</div>
          <p className="section-desc">Required components and interaction rules for core booking screens.</p>
        </div>

        <div className="cards-grid reveal">
          {[
            { title: 'Appointment Selection', text: 'Search bar, specialty categories, doctor recommendations, filters, and guided empty states.' },
            { title: 'Doctor Details', text: 'Photo, specialty, experience, available slots, and persistent book appointment CTA.' },
            { title: 'Confirmation', text: 'Success state, appointment details, calendar export, directions, and contact information.' },
          ].map((screen) => (
            <div key={screen.title} className="card">
              <div className="card-icon">🖥️</div>
              <div className="card-tag">Screen Spec</div>
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
              <div className="card-arrow">Interaction rules →</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="business">
        <div className="reveal">
          <div className="section-label">2. Business Objective</div>
          <div className="section-title">Reduce friction and improve booking outcomes</div>
          <p className="section-desc">Solve missed appointments, high support requests, long booking processes, patient confusion, and low digital adoption.</p>
        </div>

        <div className="cards-grid reveal">
          {[
            { title: 'Reduce booking time', text: 'Shorten the flow so patients can schedule care within moments.' },
            { title: 'Improve completion', text: 'Guide users clearly to boost task success and reduce drop-off.' },
            { title: 'Increase adoption', text: 'Make self-service the preferred path with an intuitive interface.' },
            { title: 'Lower support load', text: 'Reduce call center volume by resolving common questions in-product.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="card-icon">🎯</div>
              <div className="card-tag">Business Goal</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-arrow">Outcome focus →</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="design-system">
        <div className="reveal">
          <div className="section-label">7. Design System Compliance</div>
          <div className="section-title">Components, spacing, typography</div>
          <p className="section-desc">Follow approved design system patterns for buttons, inputs, dropdowns, modals, navigation, cards, and responsive layouts.</p>
        </div>

        <div className="architecture-grid reveal">
          {[
            { title: 'Spacing System', text: '8px grid spacing ensures consistent padding, margins, and layout rhythm.' },
            { title: 'Typography', text: 'Primary font: IBM Plex Sans Arabic. Secondary font: Inter.' },
            { title: 'Components', text: 'Use consistent buttons, inputs, dropdowns, modals, navigation, and cards.' },
            { title: 'Accessibility', text: 'Maintain contrast, readable text sizes, and clear interaction states.' },
          ].map((item) => (
            <div key={item.title} className="arch-feature-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="error-handling">
        <div className="reveal">
          <div className="section-label">8. Error Handling Guidelines</div>
          <div className="section-title">Validation and system errors</div>
          <p className="section-desc">Show user-friendly validation and system error messages to keep the flow recoverable and clear.</p>
        </div>

        <div className="cards-grid reveal">
          {[
            { title: 'Validation Errors', text: 'Display inline messages like “Please enter a valid mobile number.” and keep users on task.' },
            { title: 'System Errors', text: 'Use simple language such as “We are unable to complete your booking right now. Please try again.”' },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="card-icon">⚠️</div>
              <div className="card-tag">Error Guidance</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-arrow">Support clarity →</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="testing">
        <div className="reveal">
          <div className="section-label">10. Usability Testing Requirements</div>
          <div className="section-title">Participant and task validation</div>
          <p className="section-desc">Define the testing sample and critical tasks needed to validate the booking experience.</p>
        </div>

        <div className="architecture-grid reveal">
          {[
            { title: 'Participants', text: '20 patients, 5 reception staff, and 5 administrators.' },
            { title: 'Critical Tasks', text: 'Find doctor, book appointment, reschedule visit, cancel appointment.' },
            { title: 'Success Threshold', text: '85% task completion without assistance.' },
          ].map((item) => (
            <div key={item.title} className="arch-feature-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="principles">
        <div className="reveal">
          <div className="section-label">5. UX Design Principles</div>
          <div className="section-title">Clear, Consistent, Accessible</div>
          <p className="section-desc">Design principles that ensure the platform is easy to use, visible, and inclusive.</p>
        </div>

        <div className="architecture-grid reveal">
          {[
            { title: 'Simplicity', text: 'Reduce cognitive load and show only what is needed for the current task.' },
            { title: 'Visibility', text: 'Keep system status visible with clear loading, success, and progress messages.' },
            { title: 'Consistency', text: 'Use consistent visual and interaction patterns across the experience.' },
            { title: 'Accessibility', text: 'Support Arabic and English, screen readers, large text scaling, and contrast needs.' },
          ].map((item) => (
            <div key={item.title} className="arch-feature-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="metrics">
        <div className="reveal">
          <div className="section-label">9. Success Metrics</div>
          <div className="section-title">UX KPIs</div>
          <p className="section-desc">Target completion, satisfaction, speed, and support reduction metrics for the booking experience.</p>
        </div>

        <div className="monitor-grid reveal">
          {[
            { value: '90%', label: 'Appointment Completion', thresh: 'Target', color: 'var(--green)' },
            { value: '95%', label: 'Task Success', thresh: 'Target', color: 'var(--teal)' },
            { value: '< 3m', label: 'Booking Time', thresh: 'Target', color: 'var(--amber)' },
            { value: '4.5/5', label: 'Satisfaction', thresh: 'Target', color: 'var(--green)' },
            { value: '30%', label: 'Support Reduction', thresh: 'Target', color: 'var(--teal)' },
            { value: '85%', label: 'Usability Threshold', thresh: 'Completion', color: 'var(--amber)' },
          ].map((stat) => (
            <div key={stat.label} className="monitor-card">
              <div className="monitor-val" style={{ color: stat.color }}>{stat.value}</div>
              <div className="monitor-label">{stat.label}</div>
              <div className="monitor-thresh">{stat.thresh}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="handoff">
        <div className="reveal">
          <div className="section-label">11. Handoff Requirements</div>
          <div className="section-title">Design & Developer Deliverables</div>
          <p className="section-desc">Define expected deliverables for design and implementation handoff.</p>
        </div>

        <div className="architecture-grid reveal">
          {[
            { title: 'Design Deliverables', text: 'User flows, wireframes, high-fidelity designs, interaction specs, responsive layouts, and accessibility audit.' },
            { title: 'Developer Deliverables', text: 'Functional interface, responsive behavior, accessibility compliance, analytics tracking, and documentation.' },
          ].map((item) => (
            <div key={item.title} className="arch-feature-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="approval">
        <div className="reveal">
          <div className="section-label">12. Approval</div>
          <div className="section-title">Stakeholder Sign-off</div>
          <p className="section-desc">Approval from design, research, product, and operations ensures alignment before implementation.</p>
        </div>

        <div className="cards-grid reveal">
          {[
            { title: 'Lead Product Designer', text: 'Responsible for final UX design approval.' },
            { title: 'UX Research Lead', text: 'Signs off on research validation and usability findings.' },
            { title: 'Product Manager', text: 'Approves product goals, metrics, and execution readiness.' },
            { title: 'Healthcare Operations Manager', text: 'Confirms operational feasibility and workflow alignment.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="card-icon">✅</div>
              <div className="card-tag">Approver</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-arrow">Approval role →</div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">⬡ UX Interface Control Document</div>
        <div className="footer-meta">Private Healthcare Provider, Saudi Arabia · Prepared by Musa Imran · Version 1.0</div>
      </footer>

      <div className={`modal-overlay ${modalInfo.isOpen ? 'open' : ''}`} onClick={closeModalOnBg}>
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">{modalInfo.title}</div>
            <button className="modal-close" onClick={closeModal}>✕</button>
          </div>
          <div className="modal-body">
            {modalInfo.id === 'demo' ? (
              <div className="modal-section">
                <div className="modal-section-title">WHO UX Research Request</div>
                <p className="request-lead">Request access to World Health Organization guidance, interoperability research assets, and UX insights to support a healthcare integration study.</p>
                <div className="request-card">
                  <div className="request-card-title">Key request details</div>
                  <ul className="request-detail-list">
                    <li>WHO digital health guidance for UX research and clinician-facing workflows</li>
                    <li>FHIR interoperability patterns, APIs, and data exchange recommendations</li>
                    <li>Case study references for global health systems and secure integration</li>
                  </ul>
                  <div className="request-pill-row">
                    {['WHO Info', 'UX Research', 'FHIR Best Practices', 'Health Data Security'].map((item) => (
                      <span key={item} className="request-pill">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="request-note">Submit this request to begin coordination with the WHO and align the platform experience with international healthcare research standards.</div>
                <button
                  className="btn-primary"
                  style={{ marginTop: 20, width: '100%', padding: '14px' }}
                  onClick={() => alert('WHO research access request submitted. Expect a follow-up within 24–48 hours.')}
                >
                  Submit WHO Access Request
                </button>
              </div>
            ) : (
              <div className="modal-section">
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>{modalInfo.content}</p>
                <button
                  className="btn-primary"
                  style={{ marginTop: 8, width: '100%', padding: '14px' }}
                  onClick={() => alert('Access request submitted. Expect credentials within 24 hours.')}
                >
                  Submit Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
