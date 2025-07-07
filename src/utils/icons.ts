// src/utils/icons.ts

/**
 * 아이콘 목록
 * id: 아이콘 고유 식별자 (영문)
 * label: 아이콘 이름 (한글)
 * emoji: 아이콘 이모지
 * macOS8Style: Mac OS 8 스타일 아이콘 경로 (선택적)
 */
export const ICONS = [
  { id: 'folder', label: '폴더', emoji: '📁', macOS8Style: '/assets/icons/folder.svg' },
  { id: 'document', label: '문서', emoji: '📄', macOS8Style: '/assets/icons/document.svg' },
  { id: 'star', label: '별표', emoji: '⭐', macOS8Style: '/assets/icons/star.svg' },
  { id: 'heart', label: '하트', emoji: '❤️', macOS8Style: '/assets/icons/heart.svg' },
  { id: 'bell', label: '알림', emoji: '🔔', macOS8Style: '/assets/icons/bell.svg' },
  { id: 'check', label: '체크', emoji: '✅', macOS8Style: '/assets/icons/check.svg' },
  { id: 'warning', label: '경고', emoji: '⚠️', macOS8Style: '/assets/icons/warning.svg' },
  { id: 'info', label: '정보', emoji: 'ℹ️', macOS8Style: '/assets/icons/info.svg' },
  { id: 'question', label: '질문', emoji: '❓', macOS8Style: '/assets/icons/question.svg' },
  { id: 'calendar', label: '달력', emoji: '📅', macOS8Style: '/assets/icons/calendar.svg' },
  { id: 'mail', label: '메일', emoji: '📧', macOS8Style: '/assets/icons/mail.svg' },
  { id: 'chat', label: '채팅', emoji: '💬', macOS8Style: '/assets/icons/chat.svg' },
  { id: 'settings', label: '설정', emoji: '⚙️', macOS8Style: '/assets/icons/settings.svg' },
  { id: 'search', label: '검색', emoji: '🔍', macOS8Style: '/assets/icons/search.svg' },
  { id: 'user', label: '사용자', emoji: '👤', macOS8Style: '/assets/icons/user.svg' },
  { id: 'users', label: '사용자들', emoji: '👥', macOS8Style: '/assets/icons/users.svg' },
  { id: 'code', label: '코드', emoji: '💻', macOS8Style: '/assets/icons/code.svg' },
  { id: 'chart', label: '차트', emoji: '📊', macOS8Style: '/assets/icons/chart.svg' },
  { id: 'time', label: '시간', emoji: '⏱️', macOS8Style: '/assets/icons/time.svg' },
  { id: 'book', label: '책', emoji: '📚', macOS8Style: '/assets/icons/book.svg' },
  { id: 'bookmark', label: '북마크', emoji: '🔖', macOS8Style: '/assets/icons/bookmark.svg' },
  { id: 'tag', label: '태그', emoji: '🏷️', macOS8Style: '/assets/icons/tag.svg' },
  { id: 'link', label: '링크', emoji: '🔗', macOS8Style: '/assets/icons/link.svg' },
  { id: 'pin', label: '핀', emoji: '📌', macOS8Style: '/assets/icons/pin.svg' },
  
  // Mac OS 8 스타일의 아이콘들
  { id: 'finder', label: '파인더', emoji: '🔍', macOS8Style: '/assets/icons/finder.svg' },
  { id: 'macos', label: '맥OS', emoji: '🍎', macOS8Style: '/assets/icons/macos.svg' },
  { id: 'command', label: '커맨드', emoji: '⌘', macOS8Style: '/assets/icons/command.svg' },
  { id: 'option', label: '옵션', emoji: '⌥', macOS8Style: '/assets/icons/option.svg' },
  { id: 'shift', label: '시프트', emoji: '⇧', macOS8Style: '/assets/icons/shift.svg' },
  { id: 'control', label: '컨트롤', emoji: '⌃', macOS8Style: '/assets/icons/control.svg' },
  { id: 'eject', label: '이젝트', emoji: '⏏️', macOS8Style: '/assets/icons/eject.svg' },
  { id: 'trash', label: '휴지통', emoji: '🗑️', macOS8Style: '/assets/icons/trash.svg' },
  { id: 'desktop', label: '데스크탑', emoji: '🖥️', macOS8Style: '/assets/icons/desktop.svg' },
  { id: 'laptop', label: '노트북', emoji: '💻', macOS8Style: '/assets/icons/laptop.svg' },
  { id: 'iphone', label: '아이폰', emoji: '📱', macOS8Style: '/assets/icons/iphone.svg' },
  { id: 'ipad', label: '아이패드', emoji: '📱', macOS8Style: '/assets/icons/ipad.svg' },
  { id: 'music', label: '음악', emoji: '🎵', macOS8Style: '/assets/icons/music.svg' },
  { id: 'photos', label: '사진', emoji: '🖼️', macOS8Style: '/assets/icons/photos.svg' },
  { id: 'camera', label: '카메라', emoji: '📷', macOS8Style: '/assets/icons/camera.svg' },
  { id: 'video', label: '비디오', emoji: '🎬', macOS8Style: '/assets/icons/video.svg' },
  { id: 'terminal', label: '터미널', emoji: '⌨️', macOS8Style: '/assets/icons/terminal.svg' },
  { id: 'safari', label: '사파리', emoji: '🧭', macOS8Style: '/assets/icons/safari.svg' },
  { id: 'messages', label: '메시지', emoji: '💬', macOS8Style: '/assets/icons/messages.svg' },
  { id: 'facetime', label: '페이스타임', emoji: '📹', macOS8Style: '/assets/icons/facetime.svg' },
  { id: 'mail_app', label: '메일앱', emoji: '✉️', macOS8Style: '/assets/icons/mail_app.svg' },
  { id: 'contacts', label: '연락처', emoji: '👤', macOS8Style: '/assets/icons/contacts.svg' },
  { id: 'notes', label: '메모', emoji: '📝', macOS8Style: '/assets/icons/notes.svg' },
  { id: 'reminders', label: '미리알림', emoji: '📋', macOS8Style: '/assets/icons/reminders.svg' },
  { id: 'maps', label: '지도', emoji: '🗺️', macOS8Style: '/assets/icons/maps.svg' },
  { id: 'siri', label: '시리', emoji: '🔊', macOS8Style: '/assets/icons/siri.svg' },
  { id: 'appstore', label: '앱스토어', emoji: 'Ⓐ', macOS8Style: '/assets/icons/appstore.svg' },
  { id: 'cloud', label: '클라우드', emoji: '☁️', macOS8Style: '/assets/icons/cloud.svg' },
];

/**
 * 아이콘 ID로부터 이모지를 가져오는 유틸리티 함수
 * @param iconId 아이콘 ID
 * @returns 이모지 문자열, 없으면 빈 문자열 반환
 */
export const getIconEmoji = (iconId?: string): string => {
  if (!iconId) return '';
  const icon = ICONS.find(icon => icon.id === iconId);
  return icon ? icon.emoji : '';
};

/**
 * 아이콘 ID로부터 Mac OS 8 스타일 아이콘 경로를 가져오는 유틸리티 함수
 * @param iconId 아이콘 ID
 * @returns 아이콘 경로, 없으면 빈 문자열 반환
 */
export const getMacOS8IconPath = (iconId?: string): string => {
  if (!iconId) return '';
  const icon = ICONS.find(icon => icon.id === iconId);
  return icon && icon.macOS8Style ? icon.macOS8Style : '';
};

/**
 * 아이콘 목록을 내보냅니다.
 */
export const ICON_LIST = ICONS; 