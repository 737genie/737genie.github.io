export interface EducationItem {
  type: 'degree' | 'bootcamp' | 'education';
  institution: string;
  major?: string;
  period: string;
  status?: string;
}

export interface CertItem {
  name: string;
  issuer: string;
  date: string;
  status?: string;
}

export const educationItems: EducationItem[] = [
  {
    type: 'degree',
    institution: '연세대학교',
    major: '생명과학과(미래) · 천문우주학과 이중전공',
    period: '2020.03 – 2025.08',
    status: '졸업',
  },
  {
    type: 'bootcamp',
    institution: '이젠아카데미 종로점',
    major: '백엔드 부트캠프 6개월 과정',
    period: '2025.06 – 2025.12',
    status: '수료',
  },
  {
    type: 'education',
    institution: 'LG AI 연구원',
    major: 'LG Aimers 9기 & 해커톤',
    period: '2026.06 – 2026.09',
    status: '수료',
  },
];

export const certItems: CertItem[] = [
  {
    name: '정보처리기사',
    issuer: '한국산업인력공단',
    date: '2026.03',
    status: '필기 합격',
  },
  {
    name: 'OPIc IM1',
    issuer: 'ACTFL',
    date: '2025.01',
  },
];
