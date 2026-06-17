import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Trouble as TroubleshootingItem } from '../data/projects';

interface Props {
  items: TroubleshootingItem[];
  accent: string;
}

const STEPS = [
  { key: 'cause' as const,    label: '원인', bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
  { key: 'solution' as const, label: '해결', bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
];

export default function TroubleshootingAccordion({ items, accent }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: `1px solid ${isOpen ? accent + '60' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'border-color 0.2s',
              background: 'var(--color-bg)',
            }}
          >
            <button
              onClick={() => toggle(i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '0.9rem 1.1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: '2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: accent + '20',
                    border: `1.5px solid ${accent}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: accent,
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.problem}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.22 }}
                style={{ flexShrink: 0, color: 'var(--color-text-sub)', display: 'flex' }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      padding: '0 1.1rem 1.1rem 1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                    }}
                  >
                    {STEPS.map((step) => (
                      <div
                        key={step.key}
                        style={{
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.75rem 1rem',
                          background: step.bg,
                          border: `1px solid ${step.border}`,
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: step.text,
                            letterSpacing: '0.05em',
                            marginBottom: '0.3rem',
                          }}
                        >
                          {step.label}
                        </span>
                        <p
                          style={{
                            fontSize: '0.83rem',
                            color: 'var(--color-text)',
                            lineHeight: 1.65,
                            margin: 0,
                          }}
                        >
                          {item[step.key]}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
