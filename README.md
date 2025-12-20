🧠 English Master 앱 소개
🚀 Live Demo: https://english-master-jhab.vercel.app/

주요 기능 완료 사항
English Master는 영어 학습을 위한 종합 애플리케이션으로, 아래 세 가지 핵심 기능을 중심으로 구성되어 있습니다.

1. Vocabulary 기능 (/vocabulary)
인터랙티브 3D 플래시카드 제공

Mock 데이터 연동

발음 및 예문 지원

2. Conversation 기능 (/conversation)
사용자 / 봇 구분이 있는 채팅 인터페이스

타이핑 효과를 포함한 모의 AI 응답 로직

자동 스크롤링 기능으로 대화 내역 유지

3. Verification (Test) 기능 (/test)
객관식 퀴즈 컴포넌트

정답 여부 실시간 검증 (정답 / 오답 피드백 제공)

점수 요약 및 초기화 기능

⚙️ 기술적 특징 (Technical Highlights)
아키텍처: Next.js App Router 기반의 컴포넌트 중심 구조

스타일링: Vanilla CSS Modules + 통합 디자인 시스템 (globals.css)

Git 워크플로우: 기능 브랜치 기반 (feature/* → main)

✅ 검증 방법 (Verification Steps)
개발 서버 실행

bash
npm run dev
브라우저에서 접속

http://localhost:3000 열기

기능 테스트

“Vocabulary” 클릭 → 카드를 뒤집기

홈으로 이동 → “Conversation” 클릭 → “Hello” 입력

다시 홈으로 이동 → “Test” 클릭 → 문제 답변 후 점수 확인

