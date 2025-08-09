# 🎯 MeetingIQ - AI 미팅 분석 서비스

SRT 파일을 업로드하면 AI가 3단계 리스닝 방법론으로 미팅을 자동 분석해주는 웹서비스입니다.

## ✨ 주요 기능

### Phase 1 (MVP) ✅
- **SRT 파일 업로드**: 드래그 앤 드롭 지원
- **3단계 리스닝 분석**: Claude AI를 활용한 심층 분석
  - Level 1: 내부적 듣기 (개인 관점)
  - Level 2: 집중적 듣기 (상대방 관점) 
  - Level 3: 글로벌 듣기 (전체적 맥락)
- **마크다운 결과**: 구조화된 분석 보고서
- **다운로드 기능**: .md 파일로 저장
- **반응형 UI**: 모바일/태블릿 지원

### Phase 2 (예정)
- MECE 프레임워크 분석 템플릿
- TPP(피라미드 원리) 분석 템플릿
- PDF 내보내기 기능
- 사용자 계정 및 히스토리 관리

## 🚀 시작하기

### 1. 환경 설정

```bash
# 프로젝트 클론 또는 다운로드 후
npm install

# 환경변수 파일 생성
cp .env.example .env.local
```

### 2. API 키 설정

`.env.local` 파일에 Anthropic API 키를 설정하세요:

```env
ANTHROPIC_API_KEY=your_actual_api_key_here
```

**API 키 발급 방법:**
1. [Anthropic Console](https://console.anthropic.com) 접속
2. API Keys 메뉴에서 새 키 생성
3. 생성된 키를 복사하여 설정

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속

## 📁 프로젝트 구조

```
meeting-analyzer/
├── src/
│   ├── app/
│   │   ├── api/analyze/route.ts    # Claude API 연동
│   │   ├── page.tsx                # 메인 페이지
│   │   └── layout.tsx              # 레이아웃
│   ├── components/
│   │   ├── FileUpload.tsx          # 파일 업로드 컴포넌트
│   │   └── AnalysisResult.tsx      # 결과 표시 컴포넌트
│   └── utils/
│       └── srtParser.ts            # SRT 파싱 유틸리티
├── test-meeting.srt                # 테스트용 SRT 파일
└── README.md
```

## 🧪 테스트 방법

1. 프로젝트에 포함된 `test-meeting.srt` 파일 사용
2. 또는 본인의 미팅 녹음 SRT 파일 업로드
3. 분석 결과 확인 및 다운로드

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **AI**: Claude 3.5 Sonnet (Anthropic API)
- **Deployment**: Vercel (추후)

## 📝 사용 방법

1. **파일 업로드**: SRT 파일을 드래그하거나 클릭하여 업로드
2. **자동 분석**: AI가 3단계 리스닝으로 미팅 내용 분석
3. **결과 확인**: 구조화된 분석 보고서 확인
4. **다운로드**: 마크다운 파일로 저장

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📋 로드맵

- [x] Phase 1: 기본 MVP
- [ ] Phase 2: 추가 템플릿 및 기능
- [ ] Phase 3: 팀 협업 기능
- [ ] Phase 4: 고급 분석 및 인사이트

---

**© 2024 MeetingIQ. AI를 활용한 미팅 분석 서비스**