🔍 핵심 기능

  1. SRT 파일 업로드 & 전처리

  - 드래그 앤 드롭으로 간편한 SRT 파일 업로드
  - 자동 텍스트 추출 및 타임스탬프 정리
  - 다국어 지원 (한국어, 영어 우선)
  - 화자 구분 기능 (Speaker 1, 2, 3... 자동 분류)

  2. 분석 템플릿 선택 시스템

  당신의 Obsidian 템플릿 분석을 바탕으로 한 핵심 템플릿들:

  🎯 3단계 리스닝 분석 템플릿
  - Level 1: 내부적 듣기 (개인 관점)
  - Level 2: 집중적 듣기 (상대방 관점)
  - Level 3: 글로벌 듣기 (전체적 맥락)
  - 각 레벨별 인사이트 및 개선점 제시

  📊 MECE 프레임워크 분석
  - Mutually Exclusive: 중복 없는 이슈 분류
  - Collectively Exhaustive: 누락 없는 전체 커버리지
  - 논리적 구조화된 회의록 생성

  🔺 피라미드 원리 (TPP) 적용
  - 결론 우선 구조화
  - Supporting Arguments 정리
  - 액션 아이템 우선순위화

  💼 전략 회의 분석
  - 문제 정의 → 원인 분석 → 해결방안 → 실행계획
  - SWOT 분석 자동 추출
  - 의사결정 포인트 하이라이팅

  📈 세일즈/영업 미팅 분석
  - 고객 니즈 파악
  - 페인 포인트 식별
  - 제안 포인트 정리
  - 다음 액션 스텝

  3. AI 분석 엔진

  - Claude 3.5 Sonnet 기반 고도화된 텍스트 분석
  - 맥락 이해 및 감정 톤 분석
  - 핵심 키워드 자동 추출
  - 발언자별 기여도 및 참여율 분석

  4. 결과물 생성 & 내보내기

  - 구조화된 마크다운 문서 생성
  - PDF 보고서 자동 생성
  - Obsidian 연동 (직접 노트 생성)
  - Notion 페이지 자동 생성
  - Slack/Teams 요약 메시지 전송

  🛠️ 기술 스택

  Frontend:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS + Shadcn/ui
  - React Hook Form (파일 업로드)
  - Framer Motion (애니메이션)

  Backend:
  - Node.js + Express 또는 Next.js API Routes
  - Claude 3.5 Sonnet API (Anthropic)
  - PostgreSQL (사용자 데이터 & 분석 히스토리)
  - Redis (세션 캐싱)

  Infrastructure:
  - Vercel (배포) 또는 AWS
  - S3 (SRT 파일 저장)
  - Docker (컨테이너화)

  📱 사용자 플로우

  1. 파일 업로드 → SRT 드래그 앤 드롭
  2. 템플릿 선택 → 목적에 맞는 분석 방식 선택
  3. 추가 설정 → 미팅 목적, 참석자 역할 등 (선택사항)
  4. AI 분석 진행 → 실시간 진행 상황 표시
  5. 결과 확인 → 구조화된 분석 결과 열람
  6. 내보내기 → 원하는 형태로 다운로드/연동

  💡 차별화 포인트

  1. 실무 검증된 템플릿: 실제 사용 중인 Obsidian 템플릿 기반
  2. 다양한 연동: Obsidian, Notion, Slack 등 실무 툴 연동
  3. 맞춤형 분석: 미팅 목적별 특화된 분석 제공
  4. 즉시 실행 가능: 별도 교육 없이 바로 사용 가능한 결과물

  🚀 MVP (최소 기능 제품) 범위

  Phase 1 (4주)
  - SRT 파일 업로드 기능
  - 3단계 리스닝 분석 템플릿 1개
  - 기본 마크다운 결과 생성
  - 간단한 웹 인터페이스

  Phase 2 (추가 4주)
  - MECE, TPP 템플릿 추가
  - PDF 내보내기 기능
  - 사용자 계정 및 히스토리 관리

  Phase 3 (장기)
  - Obsidian/Notion 연동
  - 커스텀 템플릿 생성 기능
  - 팀 협업 기능

  실제로 만들어보시겠어요? 어떤 부분부터 시작하고 싶으신지 알려주세요!
