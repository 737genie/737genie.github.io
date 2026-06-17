import { motion } from 'framer-motion';

const items = [
  {
    num: '01',
    tag: '도전',
    headline: '생명과학, 천문학에서\n개발로 전향',
    body: '6개월 부트캠프를 거쳐 2개 서비스를\n백엔드부터 AI까지 직접 구현했습니다.',
    color: '#7b5bff',
  },
  {
    num: '02',
    tag: '데이터',
    headline: '3,000건+ 전처리부터\nRAG까지',
    body: '학부에서 쌓은 데이터 분석 감각을\n크롤링·pgvector 서비스 설계로 이었습니다.',
    color: '#a259ff',
  },
  {
    num: '03',
    tag: '협업',
    headline: '4~5인 팀에서\nAPI · 배포 설계 담당',
    body: 'REST API·DTO·예외 구조를 합의하고\n코드 리뷰로 품질을 맞췄습니다.',
    color: '#ff6fb5',
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: 'var(--space-section) 1.5rem', background: '#fff' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-sub)', marginBottom: '1.75rem' }}
        >
          About
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, margin: 0 }}>
            문제를<br />정의하는 힘
          </h2>
          <p style={{ color: 'var(--color-text-sub)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
            생명과학과 천문학을 거쳐 개발자가 됐습니다.
            서로 다른 분야를 거치며 익힌 건 무엇을 만들든{' '}
            <strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>문제를 먼저 정의하는 습관</strong>입니다.
          </p>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: '2.25rem 2rem 2.25rem 0',
                  paddingLeft: i > 0 ? '2rem' : '0',
                  borderLeft: i > 0 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, color: item.color, letterSpacing: '0.04em' }}>
                    {item.num}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-sub)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.45, letterSpacing: '-0.025em', marginBottom: '0.9rem', whiteSpace: 'pre-line' }}>
                  {item.headline}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-sub)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
