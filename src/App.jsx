import React from 'react'

const palette = {
  sky: '#0f172a',
  aqua: '#0ea5e9',
  sand: '#f8fafc',
  coral: '#fb7185',
  teal: '#14b8a6'
}

const cardShadow = '0 18px 60px rgba(15, 23, 42, 0.25)'

const Section = ({ title, eyebrow, children }) => (
  <section
    style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '28px',
      boxShadow: cardShadow,
      backdropFilter: 'blur(6px)'
    }}
  >
    {eyebrow && (
      <p
        style={{
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: palette.teal,
          fontWeight: 700,
          margin: 0,
          fontSize: '0.85rem'
        }}
      >
        {eyebrow}
      </p>
    )}
    <h2
      style={{
        color: palette.sand,
        margin: '6px 0 12px',
        fontSize: '1.5rem'
      }}
    >
      {title}
    </h2>
    <div style={{ color: 'rgba(248,250,252,0.9)', lineHeight: 1.6 }}>{children}</div>
  </section>
)

const FeatureCard = ({ title, text, icon, accent }) => (
  <div
    style={{
      background: `linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`,
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '16px',
      padding: '18px',
      boxShadow: cardShadow,
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start'
    }}
  >
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: '12px',
        background: accent,
        display: 'grid',
        placeItems: 'center',
        color: palette.sky,
        fontWeight: 800,
        fontSize: '1.1rem',
        flexShrink: 0
      }}
    >
      {icon}
    </div>
    <div>
      <h3 style={{ margin: '2px 0 6px', color: palette.sand }}>{title}</h3>
      <p style={{ margin: 0, color: 'rgba(248,250,252,0.8)', lineHeight: 1.5 }}>{text}</p>
    </div>
  </div>
)

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: `radial-gradient(circle at 20% 20%, rgba(14,165,233,0.12), transparent 28%),\
        radial-gradient(circle at 80% 0%, rgba(251,113,133,0.12), transparent 25%),\
        radial-gradient(circle at 50% 70%, rgba(20,184,166,0.12), transparent 30%),\
        linear-gradient(135deg, #0b1226 0%, #0f172a 55%, #0b1226 100%)`,
        color: palette.sand,
        fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
        margin: 0,
        padding: '34px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: 1100, width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 18px',
            borderRadius: 16,
            boxShadow: cardShadow,
            backdropFilter: 'blur(6px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: `linear-gradient(145deg, ${palette.teal}, ${palette.aqua})`,
                display: 'grid',
                placeItems: 'center',
                color: palette.sky,
                fontWeight: 800,
                fontSize: '1.3rem'
              }}
            >
              LV
            </div>
            <div>
              <p style={{ margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase', color: palette.teal, fontWeight: 700 }}>
                Life Vessel
              </p>
              <p style={{ margin: 0, color: 'rgba(248,250,252,0.8)' }}>Human care powered by Python + ChatGPT craft</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              style={{
                background: 'transparent',
                color: palette.sand,
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '10px 14px',
                borderRadius: 12,
                cursor: 'pointer'
              }}
            >
              View Protocols
            </button>
            <button
              style={{
                background: `linear-gradient(135deg, ${palette.aqua}, ${palette.teal})`,
                color: palette.sky,
                border: 'none',
                padding: '10px 16px',
                borderRadius: 12,
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(14,165,233,0.35)'
              }}
            >
              Schedule a Call
            </button>
          </div>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 20 }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: '26px',
              boxShadow: cardShadow,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 25% 30%, rgba(14,165,233,0.12), transparent 40%)'
              }}
            />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.12em', color: palette.teal, fontWeight: 700 }}>
                Transformational Care Habitat
              </p>
              <h1 style={{ margin: 0, fontSize: '2.8rem', lineHeight: 1.15 }}>
                Welcome aboard the <span style={{ color: palette.aqua }}>Life Vessel</span>
              </h1>
              <p style={{ margin: '4px 0 12px', color: 'rgba(248,250,252,0.85)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                A curated environment where medicine, mindfulness, and human connection meet. Designed with Python-driven
                clarity and ChatGPT-guided storytelling, Life Vessel helps people heal, recharge, and reimagine what great
                care feels like.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(14,165,233,0.14)', color: palette.sand, padding: '10px 14px', borderRadius: 12, border: '1px solid rgba(14,165,233,0.3)' }}>
                  🌊 Ocean-inspired serenity</div>
                <div style={{ background: 'rgba(251,113,133,0.12)', color: palette.sand, padding: '10px 14px', borderRadius: 12, border: '1px solid rgba(251,113,133,0.3)' }}>
                  🔬 Sensor-informed rituals</div>
                <div style={{ background: 'rgba(20,184,166,0.12)', color: palette.sand, padding: '10px 14px', borderRadius: 12, border: '1px solid rgba(20,184,166,0.35)' }}>
                  🤝 Compassion-first crew</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
                {[{ label: 'Sessions orchestrated', value: '2,140' }, { label: 'Avg. calm gain', value: '38%' }, { label: 'Client delight', value: '9.6/10' }].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 14,
                      padding: '14px 12px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      textAlign: 'center'
                    }}
                  >
                    <p style={{ margin: 0, color: palette.aqua, fontWeight: 800, fontSize: '1.2rem' }}>{stat.value}</p>
                    <p style={{ margin: 0, color: 'rgba(248,250,252,0.7)', fontSize: '0.9rem' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Section title="The Vessel Blueprint" eyebrow="Holistic design">
              <p style={{ margin: 0 }}>
                Every inch of the Life Vessel is intentionally crafted: circadian lighting, breathable materials, guided breathwork
                audio, and clinical-grade air that smells like a sunrise. Python pipelines tune the environment in real time while ChatGPT-inspired
                scripts help our crew share stories that calm the nervous system.
              </p>
            </Section>
            <Section title="Inside each voyage" eyebrow="Signature flow">
              <ul style={{ margin: '8px 0 0 18px', padding: 0, display: 'grid', gap: 8, listStyle: 'disc', color: 'rgba(248,250,252,0.85)' }}>
                <li><strong>Arrival ritual:</strong> grounding tea, biometric scan, and a kindness check-in.</li>
                <li><strong>Guided immersion:</strong> AI-personalized breathwork, adaptive light, and oceanic soundscapes.</li>
                <li><strong>Integration:</strong> reflective journaling prompts plus a Python-generated care brief.</li>
              </ul>
            </Section>
            <Section title="Trusted crew" eyebrow="Care team">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                <FeatureCard
                  title="Clinical navigator"
                  text="Nurses who translate your vitals into gentle next steps—never jargon."
                  icon="RN"
                  accent="rgba(14,165,233,0.3)"
                />
                <FeatureCard
                  title="Somatic guide"
                  text="Movement and breath specialists keeping you anchored in your body."
                  icon="SG"
                  accent="rgba(20,184,166,0.3)"
                />
                <FeatureCard
                  title="Technologist"
                  text="Python + ChatGPT workflows that keep the vessel adaptive and human."
                  icon="AI"
                  accent="rgba(251,113,133,0.3)"
                />
              </div>
            </Section>
          </div>
        </main>

        <section
          style={{
            background: `linear-gradient(120deg, rgba(14,165,233,0.16), rgba(20,184,166,0.12))`,
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 18,
            padding: '20px 24px',
            boxShadow: cardShadow,
            display: 'grid',
            gridTemplateColumns: '1fr 0.9fr',
            gap: 18,
            alignItems: 'center'
          }}
        >
          <div>
            <p style={{ margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase', color: palette.teal, fontWeight: 700 }}>
              Ready to sail
            </p>
            <h3 style={{ margin: '6px 0 10px', fontSize: '1.4rem' }}>See the Life Vessel in action</h3>
            <p style={{ margin: 0, color: 'rgba(248,250,252,0.85)', lineHeight: 1.6 }}>
              Book a 30-minute walkthrough with our crew. We will map your care goals, share the data model that powers the
              experience, and co-design a voyage that feels like home.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button
              style={{
                background: 'transparent',
                color: palette.sand,
                border: '1px solid rgba(255,255,255,0.35)',
                padding: '12px 14px',
                borderRadius: 12,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Download deck
            </button>
            <button
              style={{
                background: '#f8fafc',
                color: palette.sky,
                border: 'none',
                padding: '12px 18px',
                borderRadius: 12,
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(248,250,252,0.25)'
              }}
            >
              Join a Voyage
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
