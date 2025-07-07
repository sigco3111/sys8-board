# Mac OS 8 스타일 UI/UX 리뉴얼 개발 가이드라인

## 1. 프로젝트 개요

- MAC-BOARD는 Mac OS 8 스타일로 리뉴얼할 온라인 게시판 시스템
- **기술 스택**: React, TypeScript, Tailwind CSS, Firebase
- **핵심 목표**: 기존 기능은 유지하면서 UI/UX만 Mac OS 8 스타일로 변경

## 2. Mac OS 8 디자인 특징

### 2.1 색상 팔레트
- **기본 배경색**: #CCCCCC (밝은 회색)
- **윈도우 배경색**: #DDDDDD (약간 더 밝은 회색)
- **테두리 색상**: #888888 (중간 회색)
- **강조색**: #000080 (진한 파란색)
- **버튼 그라데이션**: #EEEEEE에서 #BBBBBB로 (3D 효과를 위한 그라데이션)

### 2.2 폰트
- **시스템 폰트**: Chicago 또는 Charcoal
- **본문 텍스트**: 12px
- **제목**: 14px
- **버튼 텍스트**: 12px
- **메뉴 텍스트**: 12px

### 2.3 UI 요소 특징
- **버튼**: 사각형 모서리, 3D 효과, 1px 테두리
- **윈도우**: 직사각형 디자인, 두꺼운 타이틀바, 3D 효과
- **윈도우 컨트롤**: 작은 정사각형 버튼 (닫기: 빨간색, 최소화: 노란색, 최대화: 초록색)
- **스크롤바**: 넓은 트랙(16-20px), 3D 효과 스크롤 썸
- **아이콘**: 픽셀 아트 스타일, 저해상도

## 3. 코드 작성 표준

### 3.1 CSS 변수 규칙
- Mac OS 8 색상은 CSS 변수로 정의하여 재사용
- 기존 변수명은 유지하되 값만 Mac OS 8 스타일로 변경
```css
:root {
  --mac-blue-color: #000080;
  --mac-gray-color: #CCCCCC;
  --mac-dark-color: #333333;
  --mac-light-color: #DDDDDD;
  --mac-border-color: #888888;
  --mac-window-color: #DDDDDD;
}
```

### 3.2 컴포넌트 스타일링
- Tailwind 클래스 활용하여 Mac OS 8 스타일 구현
- 복잡한 스타일은 CSS 클래스로 정의하여 재사용
- 버튼, 입력 필드 등 기본 요소는 일관된 스타일 적용

```tsx
// 올바른 예시
<button className="mac-button-os8">
  로그인
</button>

// 잘못된 예시 - 인라인 스타일
<button style={{ backgroundColor: '#CCCCCC', border: '1px solid #888888' }}>
  로그인
</button>
```

### 3.3 3D 효과 구현
- 그라데이션, 그림자, 테두리를 조합하여 Mac OS 8 스타일 3D 효과 구현
- 클릭 시 안쪽으로 움직이는 효과 추가

```css
.mac-button-os8 {
  background: linear-gradient(to bottom, #EEEEEE, #BBBBBB);
  border-top: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
  border-right: 1px solid #888888;
  border-bottom: 1px solid #888888;
  border-radius: 0;
}

.mac-button-os8:active {
  background: linear-gradient(to bottom, #BBBBBB, #DDDDDD);
  border-top: 1px solid #888888;
  border-left: 1px solid #888888;
  border-right: 1px solid #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
}
```

## 4. 파일 구조 및 작업 가이드라인

### 4.1 주요 수정 파일
- **src/index.css**: CSS 변수 및 기본 스타일 정의
- **tailwind.config.js**: Tailwind 색상 및 스타일 설정
- **components/*.tsx**: UI 컴포넌트 스타일 수정

### 4.2 주요 컴포넌트 작업
- **Desktop.tsx**: 데스크톱 배경 및 기본 레이아웃
- **TrafficLights.tsx**: 윈도우 컨트롤 버튼
- **MenuBar.tsx**: 메뉴바 및 드롭다운 메뉴
- **BulletinBoard.tsx**: 게시판 메인 컴포넌트
- **PostList.tsx**, **PostDetail.tsx**: 게시물 관련 컴포넌트

### 4.3 작업 우선순위
1. 디자인 시스템(CSS 변수, Tailwind 설정) 변경
2. 기본 UI 요소(버튼, 입력 필드, 창) 스타일링
3. 특수 컴포넌트(윈도우 컨트롤, 메뉴바, 스크롤바) 수정
4. 데스크톱 및 아이콘 스타일 변경
5. 반응형 디자인 및 호환성 조정
6. 테스트 및 디버깅

## 5. 반응형 디자인 지침

### 5.1 화면 크기별 대응
- **데스크톱**: 완전한 Mac OS 8 스타일 구현
- **태블릿**: 핵심 디자인 요소 유지, 레이아웃 조정
- **모바일**: 필수 UI 요소만 유지, 간소화된 디자인

### 5.2 미디어 쿼리 사용
```css
/* 데스크톱 - 기본 스타일 */
.mac-window {
  border: 1px solid var(--mac-border-color);
  /* 기타 Mac OS 8 스타일 */
}

/* 태블릿 */
@media (max-width: 1024px) {
  .mac-window {
    /* 태블릿에 맞게 조정된 스타일 */
  }
}

/* 모바일 */
@media (max-width: 640px) {
  .mac-window {
    /* 모바일에 맞게 간소화된 스타일 */
  }
}
```

## 6. 주요 금지사항 및 주의점

### 6.1 금지된 행동
- 기능 로직 변경 금지 (UI/UX만 변경)
- 인라인 스타일 사용 금지 (클래스 기반 스타일링 사용)
- 과도한 애니메이션 효과 추가 금지 (Mac OS 8은 최소한의 애니메이션만 사용)

### 6.2 주의사항
- Mac OS 8 스타일과 모던 웹 접근성 표준 간의 균형 유지
- 폰트 호환성 문제 해결 (웹 폰트 또는 유사 폰트 사용)
- 브라우저 호환성 확보 (필요시 CSS 접두사 추가)
- 3D 효과 구현 시 성능 고려 (과도한 그림자나 필터 사용 자제)

## 7. 테스트 및 검증

### 7.1 시각적 검증
- Mac OS 8 참조 이미지와 비교하여 스타일 일치 확인
- 다양한 화면 크기에서 UI 렌더링 검증
- 다양한 브라우저에서 일관된 모양 확인

### 7.2 기능 검증
- 모든 상호작용 요소 기능 테스트
- 키보드 접근성 및 스크린 리더 호환성 확인
- 성능 저하 없는지 확인

이 가이드라인을 준수하여 Mac OS 8 스타일의 일관되고 사용자 친화적인 UI/UX를 구현하세요. 