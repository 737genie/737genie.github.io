import { motion } from 'framer-motion';
import { educationItems, certItems } from '../data/education';

export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: 'var(--space-section) 1.5rem', background: '#fff', borderTop: '1px solid var(--color-border)' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '3.5rem' }}
        >
          Education & Certifications
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>
              학력 · 교육
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {educationItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.975rem' }}>{item.institution}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-text-sub)', flexShrink: 0, marginLeft: '1rem' }}>
                      {item.period}
                    </span>
                  </div>
                  {item.major && (
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-sub)', lineHeight: 1.6, marginBottom: '0.25rem' }}>
                      {item.major}
                    </p>
                  )}
                  {item.status && (
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.04em' }}>
                      {item.status}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>
              자격증 · 어학
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {certItems.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.975rem' }}>{cert.name}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-text-sub)', flexShrink: 0, marginLeft: '1rem' }}>
                      {cert.date}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-sub)' }}>
                    {cert.issuer}
                    {cert.status && (
                      <> · <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{cert.status}</span></>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
