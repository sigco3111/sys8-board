/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mac-blue': '#000080', // Mac OS 8의 특징적인 파란색
        'mac-gray': '#BBBBBB', // Mac OS 8 기본 배경색
        'mac-dark': '#000000', // 검정색 텍스트
        'mac-light': '#DDDDDD', // 윈도우 배경색
        'mac-border': '#000000', // 테두리 색상
        'mac-window': '#DDDDDD', // 윈도우 배경
        'mac-sidebar': '#CCCCCC', // 사이드바 색상
        'mac-button-face': '#CCCCCC', // 버튼 표면 색상
        'mac-button-highlight': '#FFFFFF', // 버튼 하이라이트
        'mac-button-shadow': '#888888', // 버튼 그림자
        'mac-menubar': '#CCCCCC', // 메뉴바 색상
        'mac-titlebar-active': '#000080', // 활성 제목 표시줄
        'mac-titlebar-inactive': '#999999', // 비활성 제목 표시줄
      },
      fontFamily: {
        'mac': ['Chicago', 'ChicagoFLF', 'Charcoal', 'monaco', 'monospace', 'system-ui'],
      },
      boxShadow: {
        'mac-window': 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #777777, 1px 1px 0 #FFFFFF, -1px -1px 0 #777777',
        'mac-button': 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888, 1px 1px 0 #FFFFFF, -1px -1px 0 #888888',
        'mac-input': 'inset 1px 1px 0 #777777, inset -1px -1px 0 #FFFFFF',
        'mac-button-active': 'inset -1px -1px 0 #FFFFFF, inset 1px 1px 0 #888888',
        'mac-dock': '0 0 0 1px #000000',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 