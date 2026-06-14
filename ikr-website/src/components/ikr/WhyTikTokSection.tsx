import { bodyFont, displayFont, ikr } from '@/lib/ikr-styles'

const COMPARE = [
  { label: 'TikTok (organisch)', pct: 85 },
  { label: 'Instagram Reels (gem.)', pct: 32 },
]

export function WhyTikTokSection() {
  return (
    <section
      style={{
        backgroundColor: ikr.navy,
        padding: 'clamp(3rem, 8vw, 100px) clamp(1rem, 6.8vw, 98px)',
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <h2
          style={{
            ...displayFont,
            fontSize: 'clamp(2rem, 6vw, 72px)',
            lineHeight: '95%',
            textTransform: 'uppercase',
            color: '#FFF9F1',
            textAlign: 'center',
            marginBottom: 'clamp(1.25rem, 3vw, 32px)',
          }}
        >
          Waarom TikTok?
        </h2>

        <p
          style={{
            ...bodyFont,
            fontSize: 'clamp(0.95rem, 1.6vw, 20px)',
            lineHeight: 1.55,
            color: 'rgba(255,249,241,0.88)',
            textAlign: 'center',
            maxWidth: 680,
            margin: '0 auto clamp(2rem, 5vw, 48px)',
          }}
        >
          TikTok bereikt nieuwe mensen bij elke video — véél meer dan Reels of Facebook posts. En nee:
          het is niet enkel voor tieners. Meer dan 46% van de gebruikers is ouder dan 34. Wij weten hoe
          je die doelgroep bereikt.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 'clamp(1rem, 3vw, 24px)',
            marginBottom: 'clamp(2rem, 5vw, 48px)',
          }}
        >
          {[
            { num: '46%', label: 'gebruikers 34+' },
            { num: '125M', label: 'topvideo bereik' },
            { num: '3×', label: 'meer organisch bereik vs. gem. Reel' },
          ].map(({ num, label }) => (
            <div
              key={label}
              style={{
                backgroundColor: 'rgba(255,249,241,0.08)',
                borderRadius: 20,
                padding: 'clamp(1rem, 2vw, 24px)',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  ...displayFont,
                  fontSize: 'clamp(2rem, 5vw, 56px)',
                  lineHeight: 1,
                  color: ikr.cyan,
                  display: 'block',
                }}
              >
                {num}
              </span>
              <span
                style={{
                  ...bodyFont,
                  fontSize: 'clamp(0.75rem, 1.2vw, 15px)',
                  color: 'rgba(255,249,241,0.75)',
                  marginTop: 8,
                  display: 'block',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255,249,241,0.06)',
            borderRadius: 20,
            padding: 'clamp(1.25rem, 2.5vw, 28px)',
          }}
        >
          <p
            style={{
              ...bodyFont,
              fontSize: 'clamp(0.8rem, 1.1vw, 14px)',
              color: 'rgba(255,249,241,0.55)',
              marginBottom: 16,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Bereik per post (illustratie)
          </p>
          {COMPARE.map(({ label, pct }) => (
            <div key={label} style={{ marginBottom: 14 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                  ...bodyFont,
                  fontSize: 'clamp(0.8rem, 1.1vw, 14px)',
                  color: '#FFF9F1',
                }}
              >
                <span>{label}</span>
                <span style={{ color: ikr.cyan }}>{pct}%</span>
              </div>
              <div
                style={{
                  height: 10,
                  borderRadius: 99,
                  backgroundColor: 'rgba(255,249,241,0.12)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    borderRadius: 99,
                    backgroundColor: label.startsWith('TikTok') ? ikr.cyan : 'rgba(255,249,241,0.35)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
