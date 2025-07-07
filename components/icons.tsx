import React from 'react';

export const FolderIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    {/* Mac OS 8 스타일 폴더 아이콘 */}
    <path d="M2 7 L2 20 L22 20 L22 7 L12 7 L10 5 L2 5 Z" fill="#CCCCCC" stroke="#000000" />
    <path d="M2 7 L2 5 L10 5 L12 7 Z" fill="#EEEEEE" stroke="#000000" />
    <path d="M2 7 L22 7 L22 8 L2 8 Z" fill="#999999" stroke="none" />
    <path d="M3 6 L3 19 L21 19 L21 8 L12 8 L10 6 Z" fill="none" stroke="#FFFFFF" />
  </svg>
);

export const MessagesSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export const BookmarkIcon = ({ className = "w-6 h-6", fill = "none" }: { className?: string; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Mac OS 8 스타일 북마크 아이콘 */}
    <rect x="6" y="2" width="12" height="20" rx="1" ry="1" fill="#CCCCCC" stroke="currentColor" />
    <path d="M7 3 L17 3 L17 21 L7 21 Z" fill="none" stroke="#FFFFFF" />
    <path d="M17 3 L17 21 L7 21" fill="none" stroke="#888888" />
    <path d="M8 3 L8 17 L12 15 L16 17 L16 3 Z" fill={fill === "none" ? "#EEEEEE" : fill} stroke="currentColor" />
  </svg>
);

export const TagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
    <path d="M7 7h.01"></path>
  </svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Mac OS 8 스타일 애플 로고 */}
    <path d="M12 3C10.5 3 9.5 4 8.5 4.5C7.5 5 6 5 5 4.5V6C6 6.5 7.5 6.5 8.5 6C9.5 5.5 10.5 4.5 12 4.5C13.5 4.5 14.5 5.5 15.5 6C16.5 6.5 18 6.5 19 6V4.5C18 5 16.5 5 15.5 4.5C14.5 4 13.5 3 12 3Z" fill="currentColor" />
    <path d="M12 6C10.5 6 9.5 7 8.5 7.5C7.5 8 6 8 5 7.5V9C6 9.5 7.5 9.5 8.5 9C9.5 8.5 10.5 7.5 12 7.5C13.5 7.5 14.5 8.5 15.5 9C16.5 9.5 18 9.5 19 9V7.5C18 8 16.5 8 15.5 7.5C14.5 7 13.5 6 12 6Z" fill="currentColor" />
    <path d="M12 9C10.5 9 9.5 10 8.5 10.5C7.5 11 6 11 5 10.5V12C6 12.5 7.5 12.5 8.5 12C9.5 11.5 10.5 10.5 12 10.5C13.5 10.5 14.5 11.5 15.5 12C16.5 12.5 18 12.5 19 12V10.5C18 11 16.5 11 15.5 10.5C14.5 10 13.5 9 12 9Z" fill="currentColor" />
    <path d="M12 12C10.5 12 9.5 13 8.5 13.5C7.5 14 6 14 5 13.5V15C6 15.5 7.5 15.5 8.5 15C9.5 14.5 10.5 13.5 12 13.5C13.5 13.5 14.5 14.5 15.5 15C16.5 15.5 18 15.5 19 15V13.5C18 14 16.5 14 15.5 13.5C14.5 13 13.5 12 12 12Z" fill="currentColor" />
    <path d="M12 15C10.5 15 9.5 16 8.5 16.5C7.5 17 6 17 5 16.5V18C6 18.5 7.5 18.5 8.5 18C9.5 17.5 10.5 16.5 12 16.5C13.5 16.5 14.5 17.5 15.5 18C16.5 18.5 18 18.5 19 18V16.5C18 17 16.5 17 15.5 16.5C14.5 16 13.5 15 12 15Z" fill="currentColor" />
    <path d="M12 18C10.5 18 9.5 19 8.5 19.5C7.5 20 6 20 5 19.5V21C6 21.5 7.5 21.5 8.5 21C9.5 20.5 10.5 19.5 12 19.5C13.5 19.5 14.5 20.5 15.5 21C16.5 21.5 18 21.5 19 21V19.5C18 20 16.5 20 15.5 19.5C14.5 19 13.5 18 12 18Z" fill="currentColor" />
  </svg>
);

export const WifiIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

export const BatteryIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
    <line x1="23" y1="13" x2="23" y2="11"></line>
  </svg>
);

export const SettingsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    {/* Mac OS 8 스타일 설정 아이콘 */}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="#CCCCCC" stroke="currentColor" />
    <path d="M4 4 L20 4 L20 20 L4 20 Z" fill="none" stroke="#FFFFFF" />
    <path d="M20 4 L20 20 L4 20" fill="none" stroke="#888888" />
    <circle cx="12" cy="12" r="6" fill="#999999" stroke="currentColor" />
    <circle cx="12" cy="12" r="2" fill="#FFFFFF" stroke="currentColor" />
    <rect x="11.5" y="4" width="1" height="3" fill="#999999" stroke="currentColor" strokeWidth="0.5" />
    <rect x="11.5" y="17" width="1" height="3" fill="#999999" stroke="currentColor" strokeWidth="0.5" />
    <rect x="17" y="11.5" width="3" height="1" fill="#999999" stroke="currentColor" strokeWidth="0.5" />
    <rect x="4" y="11.5" width="3" height="1" fill="#999999" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);

export const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
    {/* Mac OS 8 스타일 사용자 아이콘 */}
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" fill="#CCCCCC" stroke="currentColor" />
    <path d="M5 5 L19 5 L19 19 L5 19 Z" fill="none" stroke="#FFFFFF" />
    <path d="M19 5 L19 19 L5 19" fill="none" stroke="#888888" />
    <circle cx="12" cy="10" r="3" fill="#EEEEEE" stroke="currentColor" />
    <path d="M7 18 C7 14 17 14 17 18" fill="#EEEEEE" stroke="currentColor" />
  </svg>
);

export const HashtagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

export const PencilIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

export const TrashIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    {/* Mac OS 8 스타일 휴지통 아이콘 */}
    <path d="M5 5 L19 5 L18 22 L6 22 Z" fill="#CCCCCC" stroke="currentColor" />
    <path d="M6 6 L18 6 L17 21 L7 21 Z" fill="none" stroke="#FFFFFF" />
    <path d="M18 6 L17 21 L7 21" fill="none" stroke="#888888" />
    <path d="M8 3 L16 3 L16 5 L8 5 Z" fill="#EEEEEE" stroke="currentColor" />
    <line x1="10" y1="9" x2="10" y2="18" stroke="currentColor" />
    <line x1="14" y1="9" x2="14" y2="18" stroke="currentColor" />
  </svg>
);