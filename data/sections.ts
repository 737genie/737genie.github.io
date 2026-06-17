// src/data/sections.ts
// Hero Search Input: 타이핑한 키워드 → 섹션 id 매핑 → scrollIntoView로 이동.
// 한글/영문 키워드 모두 지원.

export interface SectionEntry {
  id: string;
  label: string;
  keywords: string[];
}

export const sectionIndex: SectionEntry[] = [
  { id: 'about',    label: 'About 소개',        keywords: ['소개', '문제정의', '문제를 정의하는 힘', 'about', '나'] },
  { id: 'stack',    label: '기술 스택',          keywords: ['스택', '기술', 'skill', 'stack', '스킬'] },
  { id: 'projects', label: '프로젝트',           keywords: ['프로젝트', 'project', '작업물', '포폴'] },
  { id: 'bega',     label: 'BEGA (야구 AI)',     keywords: ['베가', 'bega', '야구', 'kbo', 'rag', 'ai챗봇', '챗봇'] },
  { id: 'tripmoa',  label: 'TripMoa (여행 매칭)', keywords: ['트립모아', 'tripmoa', '여행', '매칭', '채팅', '동행'] },
  { id: 'contact',  label: 'Contact 연락처',     keywords: ['연락', '이메일', 'contact', 'github', '깃허브', '메일'] },
];

// 검색 매칭 헬퍼 (구현 참고용 — 자유롭게 개선 가능)
export function matchSections(query: string): SectionEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return sectionIndex.filter(
    (s) =>
      s.label.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()))
  );
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
