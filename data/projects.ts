// src/data/projects.ts
// 프로젝트 상세 데이터. Projects 섹션에서 카드 → 상세(모달/페이지)로 렌더링.
// troubleshooting은 아코디언/플립 카드로 problem→cause→solution을 펼친다.

export interface Trouble {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  impact?: string; // 정량 성과가 있으면 강조
}

export interface Project {
  id: string;
  name: string;
  emoji: string;
  summary: string;
  period: string;
  team: string;
  links: { label: string; url: string }[];
  stack: Record<string, string[]>;
  contributions: { title: string; points: string[] }[];
  troubleshooting: Trouble[];
}

export const projects: Project[] = [
  {
    id: 'bega',
    name: 'BEGA',
    emoji: '⚾',
    summary: '한국 프로야구 팬을 위한 커뮤니티 및 AI 검색 서비스',
    period: '2025.11 ~ 2025.12',
    team: '팀원 5명',
    links: [
      { label: 'Service', url: 'https://begabaseball.xyz' },
      { label: 'GitHub', url: 'https://github.com/BegaBaseball' },
    ],
    stack: {
      Frontend: ['React', 'TypeScript', 'React Query', 'Zustand'],
      'Backend / AI': ['Spring Boot', 'FastAPI', 'OpenAI API', 'Google Gemini'],
      Database: ['Supabase (PostgreSQL)', 'pgvector'],
      Infra: ['Docker', 'AWS EC2', 'Nginx', 'SSL'],
    },
    contributions: [
      {
        title: 'AI 챗봇 엔지니어링 (RAG)',
        points: [
          'pgvector 기반 RAG 파이프라인 설계 및 구축',
          'HyDE(Hypothetical Document Embeddings) 적용으로 검색 재현율 개선',
          'Intent Routing 기반 질의 분기 — 경기 일정 / 세이버메트릭스 / 일반 대화',
          'Agentic RAG 형태의 동적 검색 파이프라인 구현',
          'SSE 기반 실시간 스트리밍 응답 구현',
        ],
      },
      {
        title: '음성 인식(STT) 기능 도입',
        points: [
          'OpenAI Whisper API 연동 음성→텍스트 변환 엔드포인트 구현 (POST /voice)',
          'MediaRecorder Blob → FastAPI 수신 → Whisper 변환 플로우 구성',
          'STT 전용 API Key 분리로 사용량 독립 추적',
          '변환 텍스트를 기존 RAG 파이프라인(/chat/stream)에 연결',
        ],
      },
      {
        title: 'DevOps & 배포 인프라',
        points: [
          'AWS EC2 기반 프로덕션 배포',
          'CI/CD 파이프라인 구축',
          'Git 저장소 관리',
        ],
      },
      {
        title: 'BEGA 다이어리 시스템',
        points: [
          '경기 관람 기록 작성/관리 시스템 개발',
          'Supabase Storage 연동 사진 업로드',
          'DB 레벨 집계로 개인 관람 통계 자동 계산 (총 관람 수, 팀별/구장별, 승률)',
        ],
      },
      {
        title: '대규모 데이터 크롤링',
        points: [
          '최근 5년 1,000+ 경기 데이터 크롤링 및 수집',
          '데이터 정제·전처리 파이프라인 구축',
          '데이터 무결성 검증 및 품질 관리',
        ],
      },
    ],
    troubleshooting: [
      {
        title: 'Nginx 라우팅 오류로 AI 챗봇 API 500 에러',
        problem: '배포 후 /chat/stream 요청 시 500 Internal Server Error 발생',
        cause: 'Nginx가 모든 API를 Spring Boot(8080)로만 프록시. /chat/stream은 FastAPI(8001)가 처리해야 하는데 경로가 없어 500 반환',
        solution: 'AI 서비스 전용 location 블록 추가(/ai/ → FastAPI 8001). SSE 스트리밍을 위해 proxy_buffering off, proxy_read_timeout 86400s 적용',
      },
      {
        title: 'AI 챗봇 환각 — DB엔 1경기인데 3경기로 답변',
        problem: '"작년 마지막 경기" 질문 시 DB에 1경기만 있는데 3경기를 지어냄',
        cause: '답변 프롬프트 제약이 약해 도구 반환 데이터 외에 LLM이 학습 데이터 기반으로 경기를 추가 생성. 연도 맥락도 오독',
        solution: '"조회된 기록에만 있는 경기를 말할 것, 추측 금지" 제약 추가. 도구 결과 개수 검증 로직 추가. 현재 연도를 프롬프트에 명시 주입',
      },
      {
        title: 'RAG Intent Routing 오분류',
        problem: '"작년 우승팀이 어디야" 질문이 Agent(DB 조회) 대신 RAG로 라우팅되어 부정확',
        cause: '"우승팀" 키워드를 통계 질의로 분류해 RAG로 전달. RAG가 이전 대화 맥락에서 잘못된 연도의 팀명 추출',
        solution: '_is_statistical_query 분기에서 "우승/챔피언" 등 결과 키워드를 Agent로 라우팅. 규정 질문(RAG) vs 사실 조회(Agent) 경계를 결정 트리로 재설계',
      },
      {
        title: '다이어리 통계 응답 속도 최적화',
        problem: '다이어리 통계 페이지 로딩에 약 5초 소요',
        cause: '전체 다이어리 데이터를 클라이언트로 받아 JS로 계산. 데이터 증가 시 성능 저하',
        solution: '집계 로직을 DB 레벨 쿼리(GROUP BY/COUNT/AVG)로 전환. 서버에서 집계 결과만 반환하도록 리팩토링',
        impact: '5초 → 0.5초 (90% 개선)',
      },
      {
        title: 'Selenium 세션 종료 & Supabase SSL 에러',
        problem: '1,000+ 경기 대량 크롤링 중 InvalidSessionIdException, SSL 프로토콜 위반 간헐 발생',
        cause: '장시간 크롤링으로 Chrome 세션 만료·메모리 누수. HTTP/2 연결 불안정',
        solution: '재시도 로직(max_retries=3)으로 드라이버 자동 재시작. 배치 단위(100건) 분할 처리로 단일 실패가 전체에 영향 주지 않도록 구조 개선',
      },
    ],
  },
  {
    id: 'tripmoa',
    name: 'TripMoa',
    emoji: '✈️',
    summary: 'AI 기반 여행 계획·동행 매칭·여행기 공유 및 실시간 협업 편집 올인원 플랫폼',
    period: '2026.01 ~ 현재',
    team: '팀원 4명',
    links: [
      { label: 'GitHub', url: 'https://github.com/TripMoa' },
    ],
    stack: {
      Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'CSS Modules'],
      Backend: ['Spring Boot', 'WebSocket (STOMP)', 'JWT', 'OAuth2'],
      Database: ['MySQL', 'Redis'],
      Infra: ['Vite', 'SockJS'],
    },
    contributions: [
      {
        title: '메이트 매칭 시스템',
        points: [
          'MatePost Entity 설계 및 편의 메서드(조회수/좋아요/참가자 관리)',
          'BusinessException + ErrorCode 기반 커스텀 예외 계층 설계',
          'CRUD + 필터링 + 정렬 + 페이지네이션 RESTful API',
          '신청(PENDING)→승인/거절 상태 플로우, 중복 신청 방지, 신청+참가자 수 원자적 처리',
        ],
      },
      {
        title: 'Redis 기반 좋아요 & 조회수',
        points: [
          'Redis Set 기반 사용자별 좋아요 상태 관리',
          'Redis String 기반 게시글별 좋아요 수 카운팅',
          'LikeSyncScheduler로 Redis → DB 주기적 동기화',
        ],
      },
      {
        title: '실시간 1:1 채팅 시스템',
        points: [
          'ChatService 비즈니스 로직(채팅방 생성/메시지 전송/멤버십 검증)',
          'ChatRoomRepository fetch join으로 N+1 방지',
          'REST(목록/생성/조회) + STOMP(실시간 브로드캐스트) 이원화',
          'WebSocketConfig: SimpleBroker(/sub) + AppDestinationPrefix(/pub)',
          'StompHandler에서 CONNECT 프레임 JWT 추출·검증',
        ],
      },
      {
        title: 'Mate AI 자동 태그 시스템',
        points: [
          'LangChain ChatClovaX(HCX-007) + with_structured_output(json_schema)로 구조화 태그 추출',
          'Pydantic BaseModel 스키마 + 태그 풀 검증으로 환각 방지',
          '여행 스타일 11종 + 동행 분위기 6종 자동 분류',
          'ApplicationEventPublisher + @TransactionalEventListener(AFTER_COMMIT) + @Async로 글 저장과 태그 추출 완전 분리',
          '@EmbeddedId + @MapsId 복합키 매핑, @BatchSize(20)로 목록 N+1 방지',
        ],
      },
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
        title: 'STOMP Principal 타입 불일치로 사용자 조회 실패',
        problem: 'STOMP 메시지 전송 시 "사용자를 찾을 수 없습니다" 발생',
        cause: 'getUsername()이 userId(숫자)를 반환하는데 Controller에서 findByEmail()로 전달 → findByEmail("1") 호출로 실패',
        solution: 'findByEmail() → findById(Long.parseLong(principal.getName()))로 변경해 Principal 실제 타입에 맞게 조회',
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
  },
];
