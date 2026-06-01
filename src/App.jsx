import { useState } from 'react'
import './style.css'

const normalizeTitle = (id) => {
  const titleMap = {
    demo: 'Request Platform Access',
    architecture: 'Integration Architecture',
    api: 'API Reference',
    security: 'Security Overview',
    patient: 'Patient Data Mapping',
    orders: 'Lab Order Module',
    results: 'Result Delivery',
    errors: 'Error Handling',
    dr: 'Disaster Recovery',
    monitoring: 'Monitoring Overview',
    ep1: 'Create Patient',
    ep2: 'Fetch Patient',
    ep3: 'Submit Lab Order',
    ep4: 'Retrieve Results',
    ep5: 'Update Demographics',
    'sec-enc': 'Transport Encryption',
    'sec-auth': 'Authentication',
    'sec-rbac': 'Access Control',
    'sec-audit': 'Audit Logging',
    'comp-pdpl': 'PDPL Compliance',
    'comp-nca': 'NCA ECC Compliance',
    'comp-nphies': 'NPHIES Compliance',
    'comp-fhir': 'HL7 FHIR Compliance',
    'comp-moh': 'MOH Digital Compliance',
  }
  return titleMap[id] || id
}

const App = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '' })

  const openModal = (id) => {
    setModalInfo({
      isOpen: true,
      title: normalizeTitle(id),
      content: `This is a placeholder modal for ${normalizeTitle(id)}. Replace this text with full modal details if needed.`,
    })
  }

  const closeModal = () => setModalInfo({ isOpen: false, title: '', content: '' })
  const closeModalOnBg = (event) => {
    if (event.target === event.currentTarget) closeModal()
  }

  return (
    <div className="app">
      <nav>
        <div className="nav-logo">
          ⬡ PMS·LIS
          <span>HMG Integration</span>
        </div>
        <ul className="nav-links">
          <li><a href="#architecture">Architecture</a></li>
          <li><a href="#api">API</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#compliance">Compliance</a></li>
        </ul>
        <button className="nav-cta" onClick={() => openModal('demo')}>Request Access</button>
      </nav>

      <div className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>

        <div className="hero-badge">
          <span className="badge-dot"></span>
          LIVE · Version 1.0 · June 2026
        </div>

        <h1>
          <span className="line-dim">Healthcare</span><br />
          <span className="line-teal">Integration</span><br />
          <span className="line-dim">Platform</span>
        </h1>

        <p className="hero-sub">
          Seamless electronic exchange of patient demographics, laboratory orders, specimen tracking, and test results — built for Saudi healthcare compliance.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => openModal('architecture')}>Explore Architecture</button>
          <button className="btn-ghost" onClick={() => openModal('api')}>View API Spec</button>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-value">99</span>
            <span className="stat-label">% Sync Success Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">60s</span>
            <span className="stat-label">Max Result Latency</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">99.9</span>
            <span className="stat-label">% Uptime SLA</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">10yr</span>
            <span className="stat-label">Audit Log Retention</span>
          </div>
        </div>
      </div>

      <div className="flow-section" id="architecture">
        <div className="flow-container">
          <div className="reveal">
            <div className="section-label">Integration Flow</div>
            <div className="section-title">Data Journey</div>
            <p className="section-desc">From patient registration to physician review — a 9-step automated pipeline with zero manual handoff.</p>
          </div>

          <div className="flow-track reveal">
            {['Patient Registered', 'PMS Publishes', 'Engine Validates', 'Transmit to LIS', 'LIS Profile Created', 'Order Submitted', 'Sample Processing', 'Results Returned', 'Physician Reviews'].map((label, index) => (
              <div key={index} className="flow-step" onClick={() => openModal(`flow${index + 1}`)}>
                <div className="flow-node">{String(index + 1).padStart(2, '0')}</div>
                <div className="flow-step-label">{label.split(' ').map((part, partIndex) => (
                  <span key={partIndex}>{part}{partIndex < label.split(' ').length - 1 ? ' ' : ''}</span>
                ))}</div>
                {index < 8 && (
                  <div className="flow-connector"><div className="flow-connector-line"></div></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <section>
        <div className="reveal">
          <div className="section-label">Capabilities</div>
          <div className="section-title">Built for Clinical<br />Grade Reliability</div>
          <p className="section-desc">Every component engineered to Saudi healthcare interoperability standards with FHIR R4 compliance.</p>
        </div>

        <div className="cards-grid reveal">
          {[
            { icon: '🧬', tag: 'Module 01', title: 'Patient Sync', text: 'Real-time demographic synchronization with bi-directional identity resolution and National ID validation.', id: 'patient' },
            { icon: '🧪', tag: 'Module 02', title: 'Lab Orders', text: 'Electronic order transmission with priority queuing, specimen tracking, and automated routing logic.', id: 'orders' },
            { icon: '📊', tag: 'Module 03', title: 'Result Delivery', text: 'Sub-60-second result delivery pipeline with structured FHIR DiagnosticReport resources.', id: 'results' },
            { icon: '⚠️', tag: 'Module 04', title: 'Error Handling', text: 'Comprehensive error taxonomy with automated retry policies and escalation workflows.', id: 'errors' },
            { icon: '🔁', tag: 'Module 05', title: 'Disaster Recovery', text: '2-hour RTO, 15-minute RPO with continuous backup to Saudi Arabia Regional Data Center.', id: 'dr' },
            { icon: '📡', tag: 'Module 06', title: 'Monitoring', text: 'Enterprise dashboard with real-time metrics, alert thresholds, and SLA enforcement.', id: 'monitoring' },
          ].map((card) => (
            <div key={card.id} className="card" onClick={() => openModal(card.id)}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-tag">{card.tag}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className="card-arrow">Explore mapping →</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="api">
        <div className="reveal">
          <div className="section-label">API Specification</div>
          <div className="section-title">Developer-First<br />Interface Design</div>
          <p className="section-desc">RESTful endpoints over HTTPS TLS 1.3 with OAuth 2.0 Bearer Token authentication and JSON payloads.</p>
        </div>

        <div className="api-split reveal">
          <div>
            <div className="endpoint-list">
              {[
                { method: 'POST', path: '/api/v1/patients', desc: 'Create Patient', id: 'ep1' },
                { method: 'GET', path: '/api/v1/patients/{id}', desc: 'Fetch Patient', id: 'ep2' },
                { method: 'POST', path: '/api/v1/orders', desc: 'Submit Lab Order', id: 'ep3' },
                { method: 'GET', path: '/api/v1/results/{orderId}', desc: 'Retrieve Results', id: 'ep4' },
                { method: 'PUT', path: '/api/v1/patients/{id}', desc: 'Update Demographics', id: 'ep5' },
              ].map((endpoint) => (
                <div key={endpoint.id} className="endpoint-item" onClick={() => openModal(endpoint.id)}>
                  <span className={`method-badge method-${endpoint.method.toLowerCase()}`}>{endpoint.method}</span>
                  <span className="endpoint-path">{endpoint.path}</span>
                  <span className="endpoint-desc">{endpoint.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="code-block">
            <div className="code-header">
              <div className="code-dots">
                <div className="code-dot"></div>
                <div className="code-dot"></div>
                <div className="code-dot"></div>
              </div>
              <span className="code-filename">POST /api/v1/patients</span>
            </div>
            <div className="code-body">
              <div><span className="tok-comment">// Request Body</span></div>
              <div>{'{'}</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"patientId"</span>: <span className="tok-str">"HMG001245"</span>,</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"firstName"</span>: <span className="tok-str">"Ahmed"</span>,</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"lastName"</span>: <span className="tok-str">"AlQahtani"</span>,</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"gender"</span>: <span className="tok-str">"Male"</span>,</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"dateOfBirth"</span>: <span className="tok-str">"1988-04-14"</span>,</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"nationalId"</span>: <span className="tok-str">"1098765432"</span></div>
              <div>{'}'}</div>
              <br />
              <div><span className="tok-comment">// Response 201</span></div>
              <div>{'{'}</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"status"</span>: <span className="tok-str">"Success"</span>,</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"message"</span>: <span className="tok-str">"Patient Created"</span>,</div>
              <div>&nbsp;&nbsp;<span className="tok-key">"lisId"</span>: <span className="tok-str">"LIS-00982"</span></div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="security">
        <div className="reveal">
          <div className="section-label">Security</div>
          <div className="section-title">Zero-Trust<br />Architecture</div>
          <p className="section-desc">Layered security controls aligned to NCA Essential Cybersecurity Controls and Saudi PDPL requirements.</p>
        </div>

        <div className="security-grid reveal">
          {[
            { icon: '🔐', title: 'Transport Encryption', body: 'All data in transit encrypted using TLS 1.3. No fallback to deprecated versions permitted.', tags: ['TLS 1.3', 'HTTPS Only', 'Certificate Pinning'], id: 'sec-enc' },
            { icon: '🪪', title: 'Authentication', body: 'OAuth 2.0 with Bearer Token issuance. Short-lived tokens with refresh rotation policy.', tags: ['OAuth 2.0', 'Bearer Token', 'Token Rotation'], id: 'sec-auth' },
            { icon: '🛡️', title: 'Access Control', body: 'Role-Based Access Control with four defined roles. Least-privilege principle enforced across all endpoints.', tags: ['Physician', 'Nurse', 'Lab Tech', 'Sys Admin'], id: 'sec-rbac' },
            { icon: '📋', title: 'Audit Logging', body: 'Immutable event logs retained for 10 years. Covers authentication, order creation, result access, and patient updates.', tags: ['10yr Retention', 'Immutable', 'Tamper-Proof'], id: 'sec-audit' },
          ].map((card) => (
            <div key={card.id} className="sec-card" onClick={() => openModal(card.id)}>
              <span className="sec-icon">{card.icon}</span>
              <div className="sec-title">{card.title}</div>
              <div className="sec-body">{card.body}</div>
              <div className="tag-list">
                {card.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <div className="compliance-band" id="compliance">
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: 8 }}>Compliance</div>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>Fully Compliant</div>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', textAlign: 'center' }}>
          Certified against all applicable Saudi healthcare and cybersecurity standards.
        </p>
        <div className="compliance-logos">
          {[
            { id: 'comp-pdpl', label: 'PDPL' },
            { id: 'comp-nca', label: 'NCA ECC' },
            { id: 'comp-nphies', label: 'NPHIES' },
            { id: 'comp-fhir', label: 'HL7 FHIR' },
            { id: 'comp-moh', label: 'MOH Digital' },
          ].map((item) => (
            <div key={item.id} className="compliance-item" onClick={() => openModal(item.id)}>{item.label}</div>
          ))}
        </div>
      </div>

      <section>
        <div className="reveal">
          <div className="section-label">Monitoring</div>
          <div className="section-title">Always-On<br />Observability</div>
          <p className="section-desc">Enterprise monitoring with hardened alert thresholds and real-time SLA tracking.</p>
        </div>

        <div className="monitor-grid reveal">
          {[
            { value: '99.9%', label: 'Availability SLA', thresh: 'Alert < 99.9%', color: 'var(--green)' },
            { value: '2s', label: 'Response Time', thresh: 'Alert > 2 seconds', color: 'var(--teal)' },
            { value: '5%', label: 'Error Rate Ceiling', thresh: 'Alert > 5%', color: 'var(--amber)' },
            { value: '2hr', label: 'Recovery Time (RTO)', thresh: 'DR Objective', color: 'var(--green)' },
            { value: '15m', label: 'Recovery Point (RPO)', thresh: 'Backup Frequency', color: 'var(--teal)' },
            { value: '10yr', label: 'Log Retention', thresh: 'Audit Compliance', color: 'var(--amber)' },
          ].map((stat) => (
            <div key={stat.label} className="monitor-card">
              <div className="monitor-val" style={{ color: stat.color }}>{stat.value}</div>
              <div className="monitor-label">{stat.label}</div>
              <div className="monitor-thresh">{stat.thresh}</div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">⬡ PMS·LIS Integration Platform</div>
        <div className="footer-meta">Dr. Sulaiman Al Habib Medical Group (HMG) · Solution Architecture Team · ICD v1.0 · June 2026</div>
      </footer>

      <div className={`modal-overlay ${modalInfo.isOpen ? 'open' : ''}`} onClick={closeModalOnBg}>
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">{modalInfo.title}</div>
            <button className="modal-close" onClick={closeModal}>✕</button>
          </div>
          <div className="modal-body">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
