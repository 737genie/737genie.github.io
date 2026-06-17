import { motion } from 'framer-motion';
import { stackCategories } from '../data/stack';

export default function Stack() {
  return (
    <section id="stack" style={{ padding: 'var(--space-section) 1.5rem', background: '#111', color: '#f0f0f0' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: '1.75rem' }}
        >
          Tech Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ fontSize: 'var(--fs-h2)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '4rem', color: '#f0f0f0' }}
        >
          사용 기술
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {stackCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: ci * 0.07 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: '2rem',
                alignItems: 'center',
                padding: '1.5rem 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555' }}>
                {cat.title}
              </span>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.4rem 0.9rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      cursor: 'default',
                      transition: 'border-color 0.15s, background 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = item.color + '80';
                      e.currentTarget.style.background = item.color + '14';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <img src={item.icon} alt={item.name} width={16} height={16} style={{ objectFit: 'contain' }} />
                    <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#ccc', whiteSpace: 'nowrap' }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>
      </div>
    </section>
  );
}
