// src/data/stack.ts
// 카테고리별 기술 스택. Stack 섹션에서 카드 그리드로 렌더링.

export interface StackCategory {
  category: string;
  icon: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Java', 'Spring Boot', 'JPA / Hibernate', 'Spring Security', 'WebSocket (STOMP)', 'JWT', 'OAuth2'],
  },
  {
    category: 'AI / Data',
    icon: '🤖',
    items: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'Google Gemini', 'Clova X (HCX-007)', 'pgvector RAG', 'Selenium'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MySQL', 'Redis', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React', 'TypeScript', 'React Query', 'Zustand', 'Tailwind CSS'],
  },
  {
    category: 'Infra / DevOps',
    icon: '☁️',
    items: ['AWS EC2', 'Docker', 'Nginx', 'SSL', 'CI/CD', 'GitHub Actions'],
  },
];
