export interface StackItem {
  name: string;
  icon: string;
  color: string;
}

export interface StackCategory {
  title: string;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Java',          icon: 'https://cdn.simpleicons.org/openjdk/007396',    color: '#007396' },
      { name: 'Spring Boot',   icon: 'https://cdn.simpleicons.org/springboot/6DB33F', color: '#6DB33F' },
      { name: 'Spring Security', icon: 'https://cdn.simpleicons.org/springsecurity/6DB33F', color: '#6DB33F' },
      { name: 'Python',        icon: 'https://cdn.simpleicons.org/python/3776AB',     color: '#3776AB' },
      { name: 'FastAPI',       icon: 'https://cdn.simpleicons.org/fastapi/009688',    color: '#009688' },
    ],
  },
  {
    title: 'Database & Infra',
    items: [
      { name: 'MySQL',          icon: 'https://cdn.simpleicons.org/mysql/4479A1',          color: '#4479A1' },
      { name: 'Redis',          icon: 'https://cdn.simpleicons.org/redis/DC382D',           color: '#DC382D' },
      { name: 'PostgreSQL',     icon: 'https://cdn.simpleicons.org/postgresql/4169E1',      color: '#4169E1' },
      { name: 'Docker',         icon: 'https://cdn.simpleicons.org/docker/2496ED',          color: '#2496ED' },
      { name: 'AWS EC2',        icon: 'https://cdn.simpleicons.org/amazonaws/FF9900',       color: '#FF9900' },
      { name: 'Nginx',          icon: 'https://cdn.simpleicons.org/nginx/009639',           color: '#009639' },
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF',   color: '#2088FF' },
    ],
  },
  {
    title: 'AI / Data',
    items: [
      { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C', color: '#1C3C3C' },
      { name: 'OpenAI',    icon: 'https://cdn.simpleicons.org/openai/412991',    color: '#412991' },
      { name: 'Selenium',  icon: 'https://cdn.simpleicons.org/selenium/43B02A',  color: '#43B02A' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React',      icon: 'https://cdn.simpleicons.org/react/61DAFB',      color: '#61DAFB' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
      { name: 'Vite',       icon: 'https://cdn.simpleicons.org/vite/646CFF',       color: '#646CFF' },
    ],
  },
];

export const marqueeItems: StackItem[] = stackCategories.flatMap((c) => c.items);
