# CLAUDE.md — 프로젝트 작업 가이드

이 파일은 Claude Code가 이 포트폴리오를 작업할 때 따라야 할 규칙을 정의합니다.

## 프로젝트 목표
김해진(Backend Developer)의 개인 포트폴리오 사이트.
React + Vite + TypeScript 기반, GitHub Pages 배포.

## 디자인 방향: Figma 웹사이트 무드
참고: https://www.figma.com/ko-kr/

반드시 지킬 것:
- **Hero Search Input 컴포넌트는 반드시 포함.** Figma 히어로의 입력란을 차용한 섹션 검색/이동 바. 이 사이트의 시그니처 요소이므로 리팩토링·재생성 시에도 절대 삭제하지 말 것. (상세 명세는 README의 "Hero Search Input" 참고)
- **화이트 베이스 + 큰 타이포그래피.** 히어로는 화면을 채우는 과감한 헤드라인.
- **넉넉한 여백.** 섹션 간 패딩을 충분히. 답답하게 채우지 말 것.
- **카드 컴포넌트.** 둥근 모서리(16~24px) + 부드러운 그림자. 프로젝트/스택을 카드로.
- **컬러 액센트는 1~2개만.** 무채색 베이스에 포인트 컬러(blue/lime/purple/gold 중)로 생동감.
- **가벼운 스크롤 모션.** framer-motion으로 섹션 진입 시 fade/slide. 과하지 않게.
- **반응형 필수.** 모바일 우선, 데스크톱 확장.

피할 것:
- 템플릿 느낌의 부트스트랩 기본 스타일
- 과한 그라데이션/네온 남발
- 좁은 여백, 빽빽한 레이아웃

## 토큰
`src/styles/tokens.css`의 CSS 변수를 단일 출처로 사용. 하드코딩된 색상/폰트 크기 금지.

## 폰트
- 영문: Inter
- 한글: Pretendard

## 섹션 순서
Hero(헤드라인 + **Hero Search Input** + CTA) → 기술 로고 마퀴 → About("문제를 정의하는 힘") → Stack → Projects(TripMoa, BEGA) → Contact

각 섹션에는 검색 이동용 `id`를 부여하고, 키워드→id 매핑은 `src/data/sections.ts`에 둘 것.

## 데이터 분리
모든 콘텐츠는 `src/data/*.ts`에 두고 컴포넌트는 매핑만 한다. 제공되는 데이터 파일:
- `profile.ts` — 이름/태그라인/About 3메시지/연락처/학력/정량 metrics
- `stack.ts` — 카테고리별 기술 스택
- `projects.ts` — BEGA, TripMoa 상세 + 기여 + 트러블슈팅(problem/cause/solution/impact)
- `sections.ts` — Hero Search Input용 키워드→id 매핑

## ⭐ 강점 강조 전략 (이 포트폴리오의 핵심)
이 지원자의 차별점을 시각적으로 드러내는 것이 최우선 목표다. 단순 나열 금지.

1. **정량 성과를 숫자 카운터로.** About 또는 Hero 하단에 `profile.metrics`를 큰 숫자 + 카운트업 애니메이션으로. (5초→0.5초 90% 개선, 1000+ 경기, 3000+ 데이터, 트러블슈팅 10건)

2. **트러블슈팅을 인터랙티브 카드로.** 각 프로젝트의 `troubleshooting`을 아코디언 또는 플립 카드로. 기본은 제목만 보이고, 클릭하면 문제(⚠️)→원인(❓)→해결(💡) 3단계가 펼쳐지게. `impact`가 있으면 강조 뱃지로 표시. → "왜 안 됐고 어떻게 풀었나"가 이 지원자의 최대 강점이므로 가장 공들여 만들 것.

3. **AI 엔지니어링 깊이 부각.** BEGA의 RAG/HyDE/Intent Routing/SSE/Whisper, TripMoa의 Clova X Structured Output 자동 태깅은 신입 기준 희소 역량. 프로젝트 카드에서 AI 관련 기여를 시각적으로 우선 배치하거나 뱃지 처리.

4. **비선형 배경 서사.** "생명과학·천문 → 데이터 강점 → 개발"의 일관된 내러티브를 About에서 자연스럽게 연결. 약점이 아닌 차별점으로.

5. **프로젝트 상세 구조.** 카드 클릭 → 상세(모달 또는 라우트). 상세에는 요약/기간/팀/링크 → 기술 스택 → 기여(contributions) → 트러블슈팅 순. `period`에 "~ 현재"가 있으면 진행중 뱃지.

## 배포
- `npm run deploy` (gh-pages)
- 사용자 페이지면 vite.config `base: '/'`, 프로젝트 페이지면 `base: '/repo-name/'`
- react-router 사용 시 HashRouter 또는 404.html 리다이렉트로 새로고침 404 방지

## 커밋
의미 단위로 작게. 한글 커밋 메시지 OK.
