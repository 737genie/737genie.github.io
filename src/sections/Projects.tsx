import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project, type Trouble } from '../data/projects';

interface Props {
  searchQuery?: string;
  onClearSearch?: () => void;
}

const TAG_COLOR: Record<string, string> = {
  AI: '#7b5bff',
  Realtime: '#0d99ff',
  Redis: '#dc382d',
  Infra: '#16a34a',
};

export default function Projects({ searchQuery = '', onClearSearch }: Props) {
  const q = searchQuery.toLowerCase().trim();

  const filtered = q
    ? projects.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.oneLiner.toLowerCase().includes(q) ||
        p.myRole.toLowerCase().includes(q) ||
        Object.values(p.stack).flat().some((s) => s.toLowerCase().includes(q)) ||
        p.features.some((f) => f.title.toLowerCase().includes(q)) ||
        p.troubleshooting.some((t) => t.title.toLowerCase().includes(q))
      )
    : projects;

  return (
    <section id="projects" style={{ padding: 'var(--space-section) 1.5rem', background: '#fff' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '1.75rem' }}>
          Projects
        </p>
        <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '1rem' }}>
          주요 프로젝트
        </h2>

        {q && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', fontSize: '0.85rem', color: 'var(--color-text-sub)' }}>
            <span><strong style={{ color: 'var(--color-text)' }}>"{searchQuery}"</strong> 검색 결과 {filtered.length}건</span>
            <button onClick={onClearSearch} style={{ color: 'var(--color-text-sub)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.82rem', fontFamily: 'var(--font-sans)' }}>
              초기화
            </button>
          </div>
        )}

        {q && filtered.length === 0 && (
          <p style={{ padding: '4rem 0', color: 'var(--color-text-sub)', fontSize: '0.9rem' }}>
            "{searchQuery}"와 일치하는 프로젝트가 없습니다.
          </p>
        )}

        <div>
          {filtered.map((p, i) => (
            <ProjectRow key={p.id} p={p} index={i} total={filtered.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ p, index, total }: { p: Project; index: number; total: number }) {
  const [expanded, setExpanded] = useState(false);
  const [view, setView] = useState<'mine' | 'all'>('mine');
  const isOngoing = p.period.includes('현재');
  const mine = p.features.filter((f) => f.mine);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem', paddingBottom: '3rem', borderBottom: index === total - 1 ? '1px solid var(--color-border)' : 'none' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.04em' }}>{p.name}</h3>
            {isOngoing && (
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#16a34a', border: '1px solid #16a34a40', padding: '0.15rem 0.55rem', borderRadius: '4px', letterSpacing: '0.04em' }}>
                진행중
              </span>
            )}
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-sub)', marginBottom: '0.35rem', lineHeight: 1.5 }}>{p.oneLiner}</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-text-sub)', opacity: 0.7 }}>{p.period} · {p.team}</p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.25rem' }}>
          {p.links.map((link) => {
            const isService = /service|demo/i.test(link.label);
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '0.4rem 0.85rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  border: '1px solid',
                  borderColor: isService ? p.accent : 'var(--color-border)',
                  color: isService ? p.accent : 'var(--color-text-sub)',
                  background: 'transparent',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {link.label} <ArrowUpRight size={13} />
              </a>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.accent, flexShrink: 0 }}>
            My Role
          </span>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
            {p.myRole}
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {p.coreStack.map((s) => (
            <span
              key={s}
              style={{
                fontSize: '0.73rem',
                fontWeight: 500,
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-sub)',
                background: '#fafafa',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: expanded ? 'var(--color-text)' : 'var(--color-text-sub)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          fontFamily: 'var(--font-sans)',
          letterSpacing: '0.01em',
          transition: 'color 0.15s',
        }}
      >
        {expanded ? '접기' : '아키텍처 · 기능 · 트러블슈팅 보기'}
        <ChevronDown
          size={14}
          style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: '2rem' }}>
              {p.architecture && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '0.75rem' }}>
                    아키텍처
                  </p>
                  <ArchitectureDiagram arch={p.architecture} accent={p.accent} />
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-sub)' }}>
                  기능
                </span>
                <div style={{ display: 'flex', gap: '0.1rem' }}>
                  {([['mine', `나의 기여 ${mine.length}`], ['all', `전체 ${p.features.length}`]] as const).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setView(key)}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.7rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-sans)',
                        color: view === key ? 'var(--color-text)' : 'var(--color-text-sub)',
                        borderBottom: view === key ? `2px solid ${p.accent}` : '2px solid transparent',
                        transition: 'all 0.15s',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                {(view === 'mine' ? mine : [...p.features].sort((a, b) => Number(b.mine) - Number(a.mine))).map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr auto',
                      gap: '0.75rem',
                      alignItems: 'baseline',
                      padding: '0.65rem 0',
                      borderBottom: '1px solid var(--color-border)',
                      opacity: f.mine ? 1 : 0.45,
                    }}
                  >
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-text-sub)', fontWeight: 500 }}>
                      {f.domain}
                    </span>
                    <div>
                      <span style={{ fontSize: '0.875rem', fontWeight: f.mine ? 600 : 400, color: 'var(--color-text)' }}>
                        {f.title}
                      </span>
                      {f.detail && f.mine && (
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-sub)', marginTop: '0.2rem', lineHeight: 1.55 }}>
                          {f.detail}
                        </p>
                      )}
                    </div>
                    {f.tag && (
                      <span style={{ fontSize: '0.63rem', fontWeight: 700, color: TAG_COLOR[f.tag] ?? p.accent, letterSpacing: '0.04em', flexShrink: 0 }}>
                        {f.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '0.75rem' }}>
                트러블슈팅
              </p>
              <div>
                {p.troubleshooting.map((t, i) => (
                  <TroubleRow key={i} t={t} accent={p.accent} isLast={i === p.troubleshooting.length - 1} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TroubleRow({ t, accent, isLast }: { t: Trouble; accent: string; isLast: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid var(--color-border)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.85rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{t.title}</span>
          {t.impact && (
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: accent, flexShrink: 0 }}>{t.impact}</span>
          )}
        </div>
        <ChevronDown
          size={14}
          color="var(--color-text-sub)"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: '문제', text: t.problem, color: '#dc2626' },
                { label: '원인', text: t.cause,   color: '#d97706' },
                { label: '해결', text: t.solution, color: '#16a34a' },
              ].map(({ label, text, color }) => (
                <div key={label} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: '0.75rem', alignItems: 'start' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color, letterSpacing: '0.04em', paddingTop: '0.1rem' }}>
                    {label}
                  </span>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-sub)', lineHeight: 1.65, margin: 0 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ArchitectureDiagram({ arch, accent }: { arch: NonNullable<Project['architecture']>; accent: string }) {
  const [zoomed, setZoomed] = useState(false);
  const src = arch.src;

  return (
    <>
      <button
        onClick={() => setZoomed(true)}
        style={{
          display: 'block', width: '100%', padding: 0, cursor: 'zoom-in',
          background: '#fafafa', border: '1px solid var(--color-border)',
          borderRadius: '8px', overflow: 'hidden', fontFamily: 'var(--font-sans)',
        }}
      >
        <img
          src={src}
          alt={arch.alt}
          loading="lazy"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </button>
      {arch.caption && (
        <p style={{ fontSize: '0.72rem', color: 'var(--color-text-sub)', marginTop: '0.6rem', textAlign: 'center', lineHeight: 1.5 }}>
          {arch.caption}
        </p>
      )}

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 100, cursor: 'zoom-out',
              background: 'rgba(0,0,0,0.85)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', padding: '2rem',
            }}
          >
            <img src={src} alt={arch.alt} style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

