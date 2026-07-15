import begaArch from '../assets/bega_diagram.png';
import tripmoaArch from '../assets/tripmoa_diagram.png';

export interface Feature {
  domain: string;
  title: string;
  detail?: string;
  mine: boolean;
  tag?: 'AI' | 'Realtime' | 'Redis' | 'Infra';
}

export interface Trouble {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  impact?: string;
}

export interface Project {
  id: string;
  name: string;
  emoji: string;
  accent: string;
  summary: string;
  oneLiner: string;
  period: string;
  team: string;
  myRole: string;
  highlights: { label: string; sub: string }[];
  coreStack: string[];
  links: { label: string; url: string }[];
  stack: Record<string, string[]>;
  features: Feature[];
  troubleshooting: Trouble[];
  architecture?: {
    src: string;
    alt: string;
    caption?: string;
  }
}

export const projects: Project[] = [
  {
    id: 'tripmoa',
    name: 'TripMoa',
    emoji: '',
    accent: '#7b5bff',
    summary: 'AI 기반 여행 계획·동행 매칭·여행기 공유 및 실시간 협업 편집 올인원 플랫폼',
    oneLiner: 'AI 기반 여행 올인원 플랫폼',
    period: '2026.01 ~ 현재',
    team: '팀원 4명',
    myRole: 'API 28개 설계 · 담당 도메인 4개 · 실시간 기능 구현',
    highlights: [
      { label: '동행 매칭', sub: '여행 스타일 기반 메이트 매칭' },
      { label: '여행기 커뮤니티', sub: '여행 기록 공유, 좋아요, 댓글' },
      { label: 'AI 여행 동선', sub: '여행지, 기간 입력 시 일정 자동 추천' },
      { label: '실시간 채팅', sub: 'WebSocket/STOMP, JWT 인증' },
      { label: 'AI 자동 태그', sub: 'Clova X 구조화 출력, 환각 방지' },
      { label: 'Redis 좋아요', sub: '캐시, 스케줄러 DB 동기화' },
    ],
    coreStack: ['Spring Boot', 'React', 'FastAPI', 'MySQL', 'Redis', 'WebSocket', 'Docker', 'LangChain', 'Naver OCR', 'Clova X'],
    links: [{ label: 'GitHub', url: 'https://github.com/TripMoa' }],
    stack: {
      Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'CSS Modules'],
      Backend: ['Spring Boot', 'WebSocket (STOMP)', 'JWT', 'OAuth2'],
      Database: ['MySQL', 'Redis'],
      AI: ['FastAPI', 'LangChain', 'Clova X (HCX-007)'],
      Infra: ['Vite', 'SockJS'],
    },
    features: [
      { domain: '메이트 매칭', title: '메이트 API, 프론트엔드 설계 및 구현', detail: '', mine: true },
      { domain: '신고', title: '신고 시스템 구현', mine: true },
      { domain: '좋아요·조회수', title: '좋아요 시스템', detail: '5분 주기 Redis → DB 동기화', mine: true, tag: 'Redis' },
      { domain: '좋아요·조회수', title: '조회수 처리', mine: true, tag: 'Redis' },
      { domain: '실시간 채팅', title: 'WebSocket/STOMP 실시간 1:1 채팅', detail: '', mine: true, tag: 'Realtime' },
      { domain: '실시간 채팅', title: '안 읽은 메시지 추적 (Redis)', detail: '', mine: true, tag: 'Realtime' },
      { domain: '실시간 채팅', title: '실시간 채팅 프론트엔드, 백엔드 아키텍처', detail: '', mine: true, tag: 'Realtime' },
      { domain: 'AI 자동 태그', title: 'LangChain과 Clova X를 이용한 게시글 자동 태깅', detail: 'ChatClovaX(HCX-007)', mine: true, tag: 'AI' },
      { domain: 'AI 자동 태그', title: '태깅 환각 방지, 비동기 연동', detail: 'Pydantic 스키마+태그풀 검증, @TransactionalEventListener(AFTER_COMMIT)+@Async로 글저장 ↔ 태그추출 분리', mine: true, tag: 'AI' },
      { domain: 'AI 자동 태그', title: 'JPA 복합키 태그 매핑', detail: '@EmbeddedId+@MapsId, @BatchSize로 목록 N+1 방지', mine: true, tag: 'AI' },
      { domain: '인증/회원', title: '회원가입·로그인 (JWT, OAuth2), 회원 제재', mine: false },
      { domain: '여행방', title: '여행방 생성 및 멤버 초대', mine: false },
      { domain: '일정', title: '여행 일정 및 일정 아이템 관리', mine: false },
      { domain: '정산', title: '지출 입력·정산, OCR 영수증 인식, 입금 로그', mine: false },
      { domain: '여행기', title: '여행기 작성·댓글·임시저장·이미지 업로드', mine: false },
      { domain: '장소', title: '장소 검색 및 관리', mine: false },
      { domain: '바우처/공지', title: '바우처, 공지 그룹/아이템', mine: false },
    ],
    troubleshooting: [
      {
        title: 'Redis Serializer 불일치로 좋아요 수 공유 버그',
        problem: '모든 게시글의 좋아요 수가 동일하게 표시됨',
        cause: 'value serializer는 GenericJackson2Json인데 스케줄러에서 (String) 캐스팅 → 직렬화/역직렬화 불일치로 모든 키가 같은 값 반환',
        solution: 'StringRedisSerializer로 통일(단순 숫자에 적합). 기존 JSON 데이터는 redis-cli로 일괄 삭제 후 재동기화',
      },
      {
        title: 'Spring Security의 WebSocket 엔드포인트 차단',
        problem: '채팅 연결 시 /ws/info 요청에 401 반복, 5초마다 무한 재시도',
        cause: 'SockJS가 핸드셰이크 전 /ws/info로 GET 요청하는데 SecurityFilterChain이 인증 필요 경로로 처리',
        solution: 'SecurityConfig에 /ws/** permitAll() 추가. 최초 연결은 통과시키고 STOMP 레벨 StompHandler에서 JWT 검증하는 이원화 구조',
      },
      {
        title: '조회수 2배 증가 문제',
        problem: '게시글 상세 조회 시 조회수가 매번 2씩 증가',
        cause: 'React StrictMode가 개발 환경에서 2번 렌더 → useEffect API 중복 호출. Entity 메서드 방식은 SELECT+UPDATE라 동시성에도 취약',
        solution: '@Query 단일 UPDATE 쿼리로 원자적 처리. Redis TTL 키(view:{postId}:{sessionId})로 중복 조회 방지',
      },
      {
        title: 'ApplicationResponse 순환 참조',
        problem: '메이트 신청 응답 시 StackOverflowError 발생',
        cause: 'MateApplication ↔ MatePost 양방향 관계에서 Entity 직접 반환 → JSON 직렬화 시 무한 순환',
        solution: 'ApplicationResponse DTO로 필요한 필드만 평탄화(flatten). DTO 계층에서 양방향 참조를 끊어 순환 제거',
      },
    ],
    architecture: { src: tripmoaArch, alt: 'TripMoa 시스템 아키텍처' }
  },
  {
    id: 'bega',
    name: 'BEGA',
    emoji: '',
    accent: '#0d99ff',
    summary: 'KBO 야구 팬을 위한 올인원 가이드 — 직관 다이어리, 메이트 매칭, 구장 가이드, AI 챗봇',
    oneLiner: 'KBO 야구 팬을 위한 커뮤니티',
    period: '2025.11 ~ 2025.12',
    team: '팀원 5명',
    myRole: '핵심 API 14+ 설계 · AI agentic RAG 챗봇 구현 · 음성 인식 검색 시스템',
    highlights: [
      { label: '구장 가이드', sub: 'KBO 10개 구장 지도, 먹거리 정보' },
      { label: '야구 다이어리', sub: '경기 관람 기록, 사진, 통계' },
      { label: '직관 동행 매칭', sub: '같이 볼 동행 모집, 티켓 결제 서비스' },
      { label: '응원 게시판', sub: '팬 커뮤니티 게시, 댓글' },
      { label: '승부 예측', sub: '경기 결과 예측, 순위 집계' },
      { label: 'AI 기반 RAG 챗봇', sub: 'KBO 야구 챗봇' },
      { label: '통계 5초 → 0.5초', sub: 'DB 집계 전환으로 90% 개선' },
      { label: '음성 검색', sub: 'Whisper STT, SSE 스트리밍' },
    ],
    coreStack: ['FastAPI', 'Python', 'Spring Boot', 'pgvector', 'OpenAI', 'React', 'Docker', 'AWS EC2', 'PostgreSQL',],
    links: [
      { label: 'Service', url: 'https://begabaseball.xyz' },
      { label: 'GitHub', url: 'https://github.com/BegaBaseball' },
    ],
    stack: {
      'AI Server': ['FastAPI', 'OpenAI (Embedding/LLM)', 'Google Gemini', 'sentence-transformers'],
      RAG: ['pgvector', 'PostgreSQL', 'HyDE', 'Intent Router (rule + ML)'],
      Frontend: ['React 18', 'TypeScript', 'Vite', 'React Query', 'Zustand'],
      Backend: ['Spring Boot', 'JPA', 'CompletableFuture'],
      Infra: ['Docker', 'Nginx', 'GitHub Actions'],
    },
    features: [
      { domain: 'RAG 파이프라인', title: 'pgvector 기반 RAG 설계·구축', detail: 'OpenAI text-embedding-3-small 임베딩, rag_chunks 벡터 검색 (core/rag.py, retrieval.py)', mine: true, tag: 'AI' },
      { domain: 'RAG 파이프라인', title: 'HyDE 쿼리 확장', detail: '가설 문서 임베딩으로 검색 재현율 개선 (query_transformer.py)', mine: true, tag: 'AI' },
      { domain: 'RAG 파이프라인', title: 'Intent Routing (rule + ML 하이브리드)', detail: 'stats_lookup / explanatory / freeform 분기, 규칙 미스 시 joblib 분류기 (ml/intent_router.py)', mine: true, tag: 'AI' },
      { domain: 'AI Agent', title: 'Agentic RAG — Tool 호출 구조', detail: 'BaseballStatisticsAgent + database/document/game/regulation 4개 tool', mine: true, tag: 'AI' },
      { domain: 'AI Agent', title: '세이버메트릭스 계산 엔진', detail: 'OPS, wOBA, wRC+, WAR, FIP, BABIP 실계산 (core/kbo_metrics.py)', mine: true, tag: 'AI' },
      { domain: 'AI 챗봇', title: 'SSE 기반 실시간 스트리밍 응답', detail: 'StreamingResponse event_generator (routers/chat_stream.py)', mine: true, tag: 'AI' },
      { domain: 'AI 챗봇', title: '음성 인식(STT) 검색 서비스', detail: '', mine: true, tag: 'AI' },
      { domain: '데이터', title: 'KBO 경기 데이터 3700건 크롤링', detail: '', mine: true },
      { domain: '인프라', title: '서비스 배포 + CI/CD', detail: 'Docker, Nginx 프록시, GitHub Actions', mine: true, tag: 'Infra' },
      { domain: '직관 다이어리', title: '다이어리 API, 프론트엔드 설계 및 구현', detail: 'CRUD + 날짜별 경기 조회', mine: true },
      { domain: '직관 다이어리', title: '사진 업로드 (비동기)', detail: '', mine: true },
      { domain: '직관 다이어리', title: 'DB 레벨 집계 통계 API + 응답 속도 개선', detail: '@Query 기반 총 관람 수, 승률, 구장별/월별 집계', mine: true },
      { domain: '같이가요', title: '동행 매칭 게시판', mine: false },
      { domain: '같이가요', title: '동행 티켓 결제 시스템', mine: false },
      { domain: '응원/예측', title: '응원 게시판, 순위 예측', mine: false },
      { domain: '구장 가이드', title: 'KBO 구장 정보, 지도', mine: false },
      { domain: '공통/인증', title: 'OAuth2 JWT 마이페이지 공통', mine: false },
    ],
    troubleshooting: [
      {
        title: 'AI 챗봇 Hallucination',
        problem: '"작년 마지막 경기" 질문 시 DB에 1경기만 있는데 3경기를 지어냄',
        cause: '답변 프롬프트 제약이 약해 도구 반환 데이터 외에 LLM이 학습 데이터 기반으로 경기를 추가 생성. 연도 맥락도 오독',
        solution: '"조회된 기록에만 있는 경기를 말할 것, 추측 금지" 제약 추가. 도구 결과 개수 검증 로직 추가. 현재 연도를 프롬프트에 명시 주입',
      },
      {
        title: 'RAG Intent Routing 오분류',
        problem: '"작년 우승팀이 어디야" 질문이 Agent(DB 조회) 대신 RAG로 라우팅되어 부정확',
        cause: '"우승팀" 키워드를 통계 질의로 분류해 RAG로 전달. RAG가 이전 대화 맥락에서 잘못된 연도의 팀명 추출',
        solution: 'rule_intent 분기에서 "우승/챔피언" 등 결과 키워드를 Agent 경로로 라우팅. 규정 질문(explanatory) vs 사실 조회(stats_lookup) 경계를 규칙 기반으로 재설계',
      },
      {
        title: '다이어리 통계 응답 속도 최적화',
        problem: '다이어리 통계 페이지 로딩에 약 5초 소요',
        cause: '전체 다이어리 데이터를 클라이언트로 받아 JS로 계산. 데이터 증가 시 성능 저하',
        solution: 'BegaDiaryRepository에 @Query 집계 쿼리(COUNT, GROUP BY stadium/MONTH, 연도별 승수) 추가. 서버에서 집계 결과(DiaryStatisticsDto)만 반환하도록 전환',
        impact: '5초 → 0.5초 (90% 개선)',
      },
      {
        title: 'Selenium 세션 종료 & SSL 에러 (대량 크롤링)',
        problem: '1,000+ 경기 데이터 크롤링 중 InvalidSessionIdException, SSL 프로토콜 위반 간헐 발생',
        cause: '장시간 크롤링으로 Chrome 세션 만료·메모리 누수. HTTP/2 연결 불안정',
        solution: '재시도 로직(max_retries)으로 드라이버 자동 재시작. 배치 단위 분할 처리로 단일 실패가 전체 크롤링에 영향 주지 않도록 구조 개선',
      },
    ],
    architecture: { src: begaArch, alt: 'BEGA 시스템 아키텍처' }
  },
];