import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EMAIL = 'z1n3w99@gmail.com';
const GITHUB_URL = 'https://github.com/737genie';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: 'var(--space-section) 1.5rem', background: '#fff', borderTop: '1px solid var(--color-border)' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '1.75rem' }}
        >
          Contact
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, margin: 0 }}>
            함께<br />만들어요
          </h2>
          <p style={{ color: 'var(--color-text-sub)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
            새로운 기회, 협업 제안, 혹은 그냥 인사도 환영합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.75rem 0',
              borderBottom: '1px solid var(--color-border)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '0.35rem' }}>Email</p>
              <span style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{EMAIL}</span>
            </div>
            <ArrowUpRight size={22} style={{ flexShrink: 0, opacity: 0.4 }} />
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.75rem 0',
              borderBottom: '1px solid var(--color-border)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '0.35rem' }}>GitHub</p>
              <span style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>github.com/737genie</span>
            </div>
            <ArrowUpRight size={22} style={{ flexShrink: 0, opacity: 0.4 }} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: '0.75rem', color: 'var(--color-text-sub)', marginTop: '3rem' }}
        >
          © 2026 김해진 · Built with React + Vite
        </motion.p>
      </div>
    </section>
  );
}
