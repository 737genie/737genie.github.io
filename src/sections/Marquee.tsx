import { motion } from 'framer-motion';
import { marqueeItems } from '../data/stack';

function Track() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', paddingRight: '0.75rem' }}>
      {marqueeItems.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexShrink: 0,
            padding: '0.45rem 1rem',
            background: '#fafafa',
            borderRadius: '6px',
            border: '1px solid var(--color-border)',
          }}
        >
          <img src={item.icon} alt={item.name} width={16} height={16} style={{ objectFit: 'contain' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 500, whiteSpace: 'nowrap', color: 'var(--color-text)' }}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '1.5rem 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        maskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
      }}
    >
      <motion.div
        style={{ display: 'flex', gap: '0.75rem' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      >
        <Track />
        <Track />
      </motion.div>
    </div>
  );
}
