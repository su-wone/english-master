# English Master 📚

> 영어 학습을 위한 올인원 웹 애플리케이션

🚀 **라이브 데모**: [https://english-master-jhab.vercel.app/](https://english-master-jhab.vercel.app/)

## 📖 프로젝트 소개

English Master는 영어 학습자를 위한 종합 학습 플랫폼입니다. 단어 암기, 회화 연습, 실력 검증의 3가지 핵심 기능을 제공하여 효과적인 영어 학습을 지원합니다.

## ✨ 주요 기능

### 1. 📚 Vocabulary (단어 암기)
- **3D 플립 플래시카드**: 카드를 클릭하면 뒷면에 뜻과 예문이 나타납니다
- **음성 발음 지원**: 단어의 정확한 발음을 들을 수 있습니다
- **예문 제공**: 실제 사용 예시와 한국어 번역 포함

### 2. 💬 Conversation (회화 연습)
- **AI 챗봇**: 간단한 영어 대화 연습 가능
- **실시간 피드백**: 타이핑 효과로 자연스러운 대화 느낌
- **대화 기록**: 이전 대화 내용 자동 저장

### 3. 🏆 Test (실력 검증)
- **4지 선다형 퀴즈**: 학습한 내용을 퀴즈로 확인
- **즉각적인 피드백**: 정답/오답을 바로 확인 가능
- **점수 집계**: 최종 점수 확인 및 재도전 기능

## 🛠 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: JavaScript
- **스타일링**: Vanilla CSS Modules
- **아이콘**: Lucide React
- **배포**: Vercel

## 🚀 시작하기

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/su-wone/english-master.git

# 프로젝트 폴더로 이동
cd english-master

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📱 사용 방법

1. **홈 화면**에서 원하는 기능 선택
2. **하단 네비게이션 바**로 언제든지 페이지 전환
3. **Vocabulary**: 카드를 클릭해서 단어 학습
4. **Conversation**: 영어로 메시지 입력하여 대화 연습
5. **Test**: 퀴즈를 풀고 실력 확인

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **다크/라이트 모드**: 시스템 설정에 따라 자동 전환
- **직관적인 UI**: 하단 네비게이션으로 쉬운 페이지 이동
- **모던한 디자인**: 그라데이션, 부드러운 애니메이션 적용

## 📂 프로젝트 구조

```
English_master/
├── app/
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── BottomNav.js
│   │   ├── Flashcard.js
│   │   ├── ChatInterface.js
│   │   └── Quiz.js
│   ├── data/           # 데이터 파일
│   │   └── vocabulary.js
│   ├── vocabulary/     # 단어 암기 페이지
│   ├── conversation/   # 회화 연습 페이지
│   ├── test/          # 실력 검증 페이지
│   ├── globals.css    # 전역 스타일
│   └── layout.js      # 루트 레이아웃
├── public/            # 정적 파일
└── package.json
```

## 🔄 개발 워크플로우

이 프로젝트는 Git Feature Branch 전략을 사용합니다:

1. `feature/*` 브랜치에서 기능 개발
2. 완료 후 `main` 브랜치로 병합
3. 자동으로 Vercel에 배포

## 📝 라이선스

MIT License

## 👤 개발자

**Kang Su Won**

- GitHub: [@su-wone](https://github.com/su-wone)
- 프로젝트 저장소: [english-master](https://github.com/su-wone/english-master)

---

Made with ❤️ by Kang Su Won
>>>>>>> d2fbaee (docs: Translate README to Korean with comprehensive project information)
