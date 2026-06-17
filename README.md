# 김해진 | Backend Developer Portfolio

> "문제를 정의하는 힘" — 비전공의 시선으로 문제를 새롭게 정의하고, 엔지니어링으로 풀어냅니다.

React + Vite + TypeScript 기반 개인 포트폴리오 사이트입니다. GitHub Pages로 배포됩니다.

🔗 **Live:** https://{username}.github.io/

---

## 🛠 Tech Stack

### Backend
![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white)
![JPA](https://img.shields.io/badge/JPA/Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)

### Database & Infra
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_EC2-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

### AI / Data
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=flat-square&logo=selenium&logoColor=white)

---

## 📂 Projects

### 1. TripMoa — 여행 메이트 매칭 플랫폼
함께 떠날 여행 동행을 찾고, 실시간으로 소통하는 매칭 서비스

- **Stack:** Spring Boot · FastAPI · React/TypeScript · MySQL · Redis · Docker
- **Key Features**
  - STOMP/SockJS 기반 실시간 1:1 채팅 (JWT 인증, Redis 안 읽은 메시지 추적)
  - Redis 기반 좋아요/조회수 시스템 + `LikeSyncScheduler` 동기화
  - OAuth2 + JWT 인증, axios interceptor 기반 메모리 토큰 관리
  - Clova X(HCX-007) Structured Output을 활용한 AI 자동 태깅
  - 3-Layer 매칭 아키텍처, Redis Sorted Set 기반 PASS 상태 관리
  - 탭 기반 게시글 네비게이션 (ALL/MY/LIKED/PASSED/EXPIRED)

### 2. BEGA — 야구 팬 커뮤니티 플랫폼
KBO 데이터를 기반으로 한 RAG 챗봇 + 팬 커뮤니티

- **Stack:** FastAPI · Spring Boot · pgvector · OpenAI · AWS EC2
- **Key Features**
  - Selenium 기반 KBO 데이터 크롤링
  - pgvector RAG 파이프라인 + 의도 라우팅(intent routing)
  - SSE 스트리밍 응답, Whisper 기반 음성(STT) 입력
  - 한국어 시간 표현 파싱 및 할루시네이션 방지 로직
  - Docker / Nginx 기반 EC2 배포

---

## 💡 핵심 강점 (이 포트폴리오가 보여줄 것)

| 강점 | 근거 |
|------|------|
| **정량적 성과** | 통계 응답 5초→0.5초(90%↓), 1,000+ 경기 크롤링, 3,000+ 데이터 전처리 |
| **AI 엔지니어링 깊이** | RAG + HyDE + Intent Routing + Agentic RAG + SSE 스트리밍 + Whisper STT, Clova X Structured Output 환각 방지 |
| **트러블슈팅 역량** | 문제→원인→해결 구조의 실전 해결 사례 10건 (Nginx/Redis/STOMP/JPA 등) |
| **비선형 배경 서사** | 생명과학·천문 → 대규모 데이터 강점 → 백엔드. "문제를 정의하는 힘"으로 일관 브랜딩 |

> 콘텐츠는 모두 `src/data/*.ts`에 정리되어 있습니다 (`profile.ts`, `stack.ts`, `projects.ts`, `sections.ts`).
> 특히 `projects.ts`의 `troubleshooting` 배열은 **인터랙티브 카드(아코디언/플립)**로 구현하여 강점을 극대화하세요. 자세한 구현 방향은 `CLAUDE.md` 참고.

---

## 📫 Contact

- **Email:** z1n3w99@gmail.com
- **GitHub:** https://github.com/{username}
- **Blog / Notion:** {portfolio-link}

---
---

## 🎨 Design System

> **디자인 레퍼런스: [Figma 공식 웹사이트](https://www.figma.com/ko-kr/)**
> 깔끔한 화이트 베이스 위에 큼직한 타이포그래피와 컬러풀한 액센트를 얹는 모던 SaaS 스타일을 지향합니다.

### 디자인 원칙
- **여백 우선(Whitespace-first)** — 콘텐츠 사이 넉넉한 패딩, 답답하지 않은 호흡
- **큰 타이포그래피** — 히어로 헤드라인은 과감하게 크게, 명확한 위계
- **카드 기반 레이아웃** — 둥근 모서리(radius 12~24px), 부드러운 그림자
- **컬러 액센트** — 무채색 베이스 + 포인트 컬러 1~2개로 생동감
- **스크롤 인터랙션** — 섹션 진입 시 fade/slide 등 가벼운 모션
- **반응형** — 모바일/데스크톱 모두 자연스럽게

### Design Tokens (`src/styles/tokens.css`)
```css
:root {
  /* Base */
  --color-bg:        #ffffff;
  --color-surface:   #f5f5f7;
  --color-text:      #1a1a1a;
  --color-text-sub:  #6b6b6b;
  --color-border:    #e5e5e5;

  /* Accent (Figma 무드 — lime/purple/gold 중 택1~2) */
  --color-accent:        #0d99ff;  /* Figma blue */
  --color-accent-lime:   #c9f73e;
  --color-accent-purple: #a259ff;
  --color-accent-gold:   #ffc700;

  /* Typography */
  --font-sans: 'Inter', 'Pretendard', -apple-system, sans-serif;
  --fs-hero:  clamp(2.5rem, 6vw, 5rem);
  --fs-h2:    clamp(1.75rem, 3vw, 2.75rem);
  --fs-body:  1rem;

  /* Radius & Shadow */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.06);
  --shadow-hover: 0 8px 32px rgba(0, 0, 0, 0.12);

  /* Spacing */
  --space-section: clamp(4rem, 10vw, 8rem);
}
```

### 추천 폰트
- **본문/제목:** [Inter](https://fonts.google.com/specimen/Inter) (Figma가 실제 사용)
- **한글:** [Pretendard](https://github.com/orioncactus/pretendard)

### 권장 라이브러리
- **모션:** `framer-motion` — 스크롤 인터랙션, 페이지 전환
- **아이콘:** `lucide-react`
- **(선택) 스타일링:** Tailwind CSS 또는 CSS Modules

```bash
npm install framer-motion lucide-react
```

### 섹션 구성 (Figma 랜딩 구조 차용)
| 섹션 | 내용 | Figma 대응 |
|------|------|-----------|
| Hero | 이름 + 한 줄 슬로건 + **Hero Search Input** + CTA | "무엇이든 만들어 보세요" 히어로 |
| Marquee | 사용 기술 로고 흐르는 띠 | 고객사 로고 스트립 |
| About | "문제를 정의하는 힘" 내러티브 | 가치 제안 섹션 |
| Stack | 기술 스택 카테고리별 카드 | 기능 그리드 |
| Projects | TripMoa/BEGA 카드 + 상세 | 프로젝트 갤러리 |
| Contact | 이메일 / GitHub / 블로그 | 푸터 CTA |

### ⭐ Hero Search Input (필수 컴포넌트)
Figma 히어로의 입력란 형태를 차용한 **섹션 검색/이동 바**. 포트폴리오의 시그니처 요소이므로 **절대 생략하지 말 것.**

- **위치:** Hero 섹션, 슬로건 바로 아래 중앙
- **모양:** 알약(pill) 형태, 둥근 모서리(`--radius-lg`), 부드러운 그림자(`--shadow-card`), 좌측 검색 아이콘(lucide `Search`), placeholder
- **placeholder 예시:** `"무엇이 궁금하세요? (예: 스택, 프로젝트, 연락처)"`
- **동작:**
  - 타이핑하면 섹션 이름/키워드 자동완성 드롭다운 표시 (About, Stack, Projects, TripMoa, BEGA, Contact 등)
  - Enter 또는 항목 클릭 시 해당 섹션으로 부드럽게 스크롤(`scrollIntoView({ behavior: 'smooth' })`)
  - 매칭은 한글/영문 키워드 모두 지원 (예: "스택" → Stack, "야구" → BEGA)
- **구현 메모:** 각 섹션에 `id` 부여, 검색 키워드 → `id` 매핑 테이블을 `src/data/sections.ts`에 정의

```tsx
// 예시 매핑 (src/data/sections.ts)
export const sectionIndex = [
  { id: 'about',    label: 'About',    keywords: ['소개', '문제정의', 'about'] },
  { id: 'stack',    label: 'Stack',    keywords: ['스택', '기술', 'skill', 'stack'] },
  { id: 'projects', label: 'Projects', keywords: ['프로젝트', 'project'] },
  { id: 'tripmoa',  label: 'TripMoa',  keywords: ['트립모아', '여행', '매칭'] },
  { id: 'bega',     label: 'BEGA',     keywords: ['베가', '야구', 'kbo'] },
  { id: 'contact',  label: 'Contact',  keywords: ['연락', '이메일', 'contact'] },
];
```

---

## ⚙️ Development (Vite + React + TS)

### 환경
- Node.js 18+
- npm 또는 pnpm

### 프로젝트 생성
```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install
```

### gh-pages 배포 설정

1. 배포 패키지 설치
```bash
npm install -D gh-pages
```

2. `vite.config.ts` — base 경로 설정
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 사용자 페이지(username.github.io)면 '/', 프로젝트 페이지면 '/repo-name/'
  base: '/',
})
```

3. `package.json` — 배포 스크립트 추가
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 로컬 실행
```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

### 배포
```bash
npm run deploy
```
배포 후 GitHub 저장소 → **Settings → Pages → Branch: `gh-pages`** 선택.

> **사용자 페이지로 쓰려면** 저장소 이름을 반드시 `{username}.github.io`로 생성하세요. (`base: '/'`)
> **프로젝트 페이지로 쓰려면** 임의 저장소 이름 + `base: '/repo-name/'`로 설정하세요.

### GitHub Actions 자동 배포 (선택)
`.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
> Actions 사용 시 Settings → Pages → Source를 **GitHub Actions**로 설정하세요.

### SPA 라우팅 주의 (react-router 사용 시)
GitHub Pages는 새로고침 시 404가 발생할 수 있습니다. 해시 라우터(`HashRouter`)를 쓰거나, `public/404.html`을 추가해 리다이렉트 처리하세요.

---

## 📁 권장 폴더 구조
```
portfolio/
├── public/
├── src/
│   ├── components/      # Header, Footer, Card 등 공통 컴포넌트
│   ├── sections/        # Hero, About, Stack, Projects, Contact
│   ├── data/            # projects.ts, stack.ts (데이터 분리)
│   ├── styles/          # tokens.css (디자인 토큰), global.css
│   ├── assets/          # 이미지, 갤럭시 사진 등
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
└── package.json
```
