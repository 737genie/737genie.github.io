// src/data/profile.ts
// 포트폴리오 전반의 프로필/About 데이터. 컴포넌트는 이 데이터를 매핑만 한다.

export const profile = {
  name: '김해진',
  role: 'Backend Developer',
  tagline: '문제를 정의하는 힘',
  heroHeadline: '관찰하고, 이해하고, 구현합니다',
  heroSub: '생명과학과 천문학을 거쳐 개발에 온 백엔드 개발자입니다. 분야가 달라도 문제를 구조화하는 방식은 같다고 믿습니다.',

  contact: {
    email: 'z1n3w99@gmail.com',
    phone: '010-9337-6863',
    github: 'https://github.com/', // 실제 프로필 URL로 교체
  },

  education: [
    '연세대학교 생명과학과 (졸업)',
    '연세대학교 천문우주학과 (졸업)',
  ],

  // About 섹션 3개 핵심 메시지
  about: [
    {
      icon: '🌠',
      title: '꾸준히 도전하는 사람',
      headline: '생명과학과 천문학을 거쳐 개발에 왔습니다',
      body: '분야가 달라도 관찰하고 이해하며 구현하는 과정은 같다고 믿습니다. 그 믿음으로 지금도 개발자로서 꾸준히 성장하고 있습니다.',
    },
    {
      icon: '📊',
      title: '대규모 데이터에 강한 사람',
      headline: '3,000+ 개의 데이터를 전처리·분석한 경험',
      body: '학부 시절 3,000개 이상의 데이터를 안정적으로 처리하는 역량을 키웠습니다. 이 경험은 프로젝트의 데이터 수집·전처리 흐름을 체계적으로 구조화하는 힘이 되었습니다.',
    },
    {
      icon: '🍃',
      title: '팀의 흐름을 만드는 사람',
      headline: '문제를 구조화하고 팀의 방향을 만들 때 보람을 느낍니다',
      body: '서비스의 안정성과 사용성은 결국 협업에서 온다고 생각합니다. 함께 더 나은 흐름을 만들어가는 개발자가 되고 싶습니다.',
    },
  ],

  // 히어로/About 근처에 숫자 카운터로 강조할 정량 성과
  metrics: [
    { value: 90, suffix: '%', label: '통계 응답 속도 개선', detail: '5초 → 0.5초' },
    { value: 1000, suffix: '+', label: '경기 데이터 크롤링', detail: '최근 5년 KBO' },
    { value: 3000, suffix: '+', label: '데이터 전처리·분석', detail: '학부 연구 경험' },
    { value: 10, suffix: '건', label: '트러블슈팅 해결', detail: '문제→원인→해결' },
  ],
};
