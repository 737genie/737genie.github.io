import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CornerDownLeft } from 'lucide-react';

const QUICK_TAGS = ['Spring Boot', 'Redis', 'FastAPI', 'RAG', 'Docker', 'WebSocket'];

// 헤드라인 안에서 타이핑됐다 지워지며 순환할 키워드
const TYPING_WORDS = ['RAG 파이프라인', 'Redis 좋아요 시스템', '실시간 채팅', 'KBO 야구 AI', 'Clova X 자동 태깅'];

/** 타이핑 → 멈춤 → 지우기를 반복하는 텍스트 훅 */
function useTypingText(words: string[]) {
  const [text, setText] = useState('');
  const idx = useRef(0);
  const char = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[idx.current % words.length];

      if (!deleting.current) {
        char.current += 1;
        setText(word.slice(0, char.current));
        if (char.current === word.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1600); // 다 쓰고 잠깐 멈춤
          return;
        }
        timeout = setTimeout(tick, 90); // 타이핑 속도
      } else {
        char.current -= 1;
        setText(word.slice(0, char.current));
        if (char.current === 0) {
          deleting.current = false;
          idx.current += 1;
          timeout = setTimeout(tick, 350); // 다음 단어 전 짧은 텀
          return;
        }
        timeout = setTimeout(tick, 45); // 지우는 속도(더 빠르게)
      }
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, [words]);

  return text;
}

interface Props {
  onSearch: (q: string) => void;
}

export default function Hero({ onSearch }: Props) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const typed = useTypingText(TYPING_WORDS);

  const submit = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    onSearch(trimmed);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '7rem 1.5rem 4rem',
        overflow: 'hidden',
        // Figma 무드: 순백이 아닌 파스텔 틴트 배경
        background:
          'radial-gradient(1200px 600px at 50% -10%, #efeaff 0%, #f7f5ff 35%, #ffffff 75%)',
      }}
    >
      {/* 떠다니는 장식 블롭 (Figma 특유의 컬러풀한 포인트) */}
      <FloatingBlobs />

      {/* eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        style={{
          position: 'relative',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--color-text-sub)',
          letterSpacing: '0.04em',
          marginBottom: '2.25rem',
          padding: '0.45rem 1rem',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid var(--color-border)',
          backdropFilter: 'blur(8px)',
        }}
      >
        👩‍🚀 Backend Developer · 김해진
      </motion.p>

      {/* 거대 헤드라인 — 둘째 줄 키워드가 타이핑되며 순환 */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          position: 'relative',
          fontSize: 'clamp(2.5rem, 7vw, 5.75rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.045em',
          color: 'var(--color-text)',
          margin: '0 auto 2.75rem',
        }}
      >
        <span style={{ display: 'block' }}>이런 걸 만듭니다</span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '1.25em',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(100deg, #7b5bff 0%, #a259ff 50%, #ff6fb5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              whiteSpace: 'nowrap',
            }}
          >
            {typed}
          </span>
          {/* 깜빡이는 커서 */}
          <span
            aria-hidden
            style={{
              display: 'inline-block',
              width: '0.06em',
              height: '0.9em',
              marginLeft: '0.05em',
              background: '#a259ff',
              animation: 'heroCaret 1s step-end infinite',
            }}
          />
        </span>
        <style>{`
          @keyframes heroCaret { 0%,100%{opacity:1} 50%{opacity:0} }
        `}</style>
      </motion.h1>

      {/* ── Figma 스타일 프롬프트 바 — 크고 도톰하게 ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ position: 'relative', width: '100%', maxWidth: '780px' }}
      >
        {/* 코드 에디터 풍 검색창: print('...') */}
        <div
          onClick={() => inputRef.current?.focus()}
          style={{
            background: '#1e1e2e',
            border: `2px solid ${focused ? '#a259ff' : 'rgba(255,255,255,0.08)'}`,
            borderRadius: 'var(--radius-lg)',
            boxShadow: focused
              ? '0 20px 60px rgba(123,91,255,0.35)'
              : '0 18px 55px rgba(20,16,40,0.35)',
            transition: 'border-color 0.2s, box-shadow 0.25s',
            overflow: 'hidden',
            cursor: 'text',
            textAlign: 'left',
          }}
        >
          {/* 타이틀 바 — 신호등 점 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.1rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#27c93f' }} />
            <span style={{ marginLeft: '0.6rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono, monospace)' }}>
              ~ /portfolio
            </span>
          </div>

          {/* 코드 라인 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '1.5rem 1.75rem',
              fontFamily: 'var(--font-mono, "SF Mono", Menlo, Consolas, monospace)',
              fontSize: 'clamp(1.05rem, 3vw, 1.6rem)',
              flexWrap: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <span style={{ color: '#a259ff', flexShrink: 0, fontWeight: 700 }}>$</span>
            <span style={{ color: '#82aaff', flexShrink: 0 }}>grep</span>
            <span style={{ color: '#c3e88d', flexShrink: 0 }}>'</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              className="hero-code-input"
              placeholder={focused || query ? '' : typed}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => e.key === 'Enter' && submit(query)}
              style={{
                flex: 1,
                minWidth: 0,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: '#f78c6c',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 500,
              }}
            />
            <span style={{ color: '#c3e88d', flexShrink: 0 }}>'</span>
            <button
              aria-label="검색 실행"
              onClick={(e) => {
                e.stopPropagation();
                submit(query);
              }}
              style={{
                flexShrink: 0,
                marginLeft: '0.6rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.55)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'color 0.15s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#a259ff';
                e.currentTarget.style.transform = 'scale(1.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <CornerDownLeft size={22} />
            </button>
          </div>
          <style>{`
            .hero-code-input::placeholder {
              color: rgba(247,140,108,0.5);
              font-weight: 500;
            }
          `}</style>
        </div>

        {/* ── 빠른 선택 태그 ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
          }}
        >
          {QUICK_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => submit(tag)}
              style={{
                fontSize: '0.88rem',
                fontWeight: 500,
                padding: '0.45rem 1.1rem',
                borderRadius: '999px',
                border: '1px solid rgba(0,0,0,0.08)',
                background: 'rgba(255,255,255,0.7)',
                color: 'var(--color-text-sub)',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a259ff';
                e.currentTarget.style.color = '#7b5bff';
                e.currentTarget.style.background = 'rgba(162,89,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                e.currentTarget.style.color = 'var(--color-text-sub)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.7)';
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* Figma 무드의 떠다니는 컬러 블롭 장식 */
function FloatingBlobs() {
  const blobs = [
    { size: 220, color: 'rgba(123,91,255,0.18)', top: '12%', left: '8%', dur: 7 },
    { size: 160, color: 'rgba(255,111,181,0.16)', top: '18%', right: '10%', dur: 9 },
    { size: 130, color: 'rgba(201,247,62,0.20)', bottom: '14%', left: '14%', dur: 8 },
    { size: 100, color: 'rgba(13,153,255,0.14)', bottom: '20%', right: '16%', dur: 6 },
  ];
  return (
    <>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: b.dur, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            background: b.color,
            filter: 'blur(36px)',
            top: (b as any).top,
            left: (b as any).left,
            right: (b as any).right,
            bottom: (b as any).bottom,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}