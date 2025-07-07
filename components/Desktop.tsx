/**
 * 데스크톱 화면을 표현하는 컴포넌트
 * Mac OS 8 스타일의 데스크톱 환경을 제공합니다.
 */
import React, { useState, useEffect } from 'react';
import MenuBar from './MenuBar';
import { FolderIcon, SettingsIcon } from './icons';
import HelpModal from './HelpModal';
import BulletinBoard from './BulletinBoard';
import { User } from '../src/types';
import SettingsModal from './SettingsModal';

// 로그아웃 상태를 저장하기 위한 로컬 스토리지 키
const LOGOUT_FLAG_KEY = 'mac_board_force_logout';
// 배경화면 저장을 위한 로컬 스토리지 키
const WALLPAPER_KEY = 'mac_board_wallpaper';
const WALLPAPER_TYPE_KEY = 'mac_board_wallpaper_type';
// 기본 배경화면 경로 (빈 문자열로 설정하여 회색 배경 사용)
const DEFAULT_WALLPAPER = '';
// 대체 배경색
const FALLBACK_BG_COLOR = '#BBBBBB'; // Mac OS 8 기본 회색

type BoardState = 'closed' | 'board' | 'bookmarks';

/**
 * Desktop 컴포넌트 속성
 */
interface DesktopProps {
  /** 현재 로그인된 사용자 정보 */
  user: User;
  /** 게시판 열기 핸들러 */
  onOpenBoard: () => void;
  /** 로그아웃 핸들러 */
  onLogout: () => Promise<void>;
}

/**
 * Desktop 컴포넌트
 */
const Desktop: React.FC<DesktopProps> = ({ user, onOpenBoard, onLogout }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [boardState, setBoardState] = useState<BoardState>('closed');
  const [wallpaper, setWallpaper] = useState<string>(() => {
    const type = localStorage.getItem(WALLPAPER_TYPE_KEY);
    if (type === 'default' || !type) {
      // 기본값으로 빈 문자열 반환하여 회색 배경 사용
      return DEFAULT_WALLPAPER;
    } else if (type === 'gray') {
      return ''; // 빈 문자열 반환하여 회색 배경 사용
    } else {
      return localStorage.getItem(WALLPAPER_KEY) || DEFAULT_WALLPAPER;
    }
  });
  const [defaultImageError, setDefaultImageError] = useState<boolean>(() => {
    // 기본값이 빈 문자열이므로 기본적으로 에러 상태로 설정
    return localStorage.getItem(WALLPAPER_TYPE_KEY) === 'gray' || DEFAULT_WALLPAPER === '';
  });

  useEffect(() => {
    // 기본 배경화면이 빈 문자열이면 이미지 로드 시도가 필요 없음
    if (wallpaper && wallpaper !== '') {
      const img = new Image();
      img.onload = () => setDefaultImageError(false);
      img.onerror = () => setDefaultImageError(true);
      img.src = wallpaper;
    }
  }, [wallpaper]);

  const desktopItems = [
    { 
      id: 'bulletin-board', 
      name: '게시판', 
      Icon: FolderIcon, 
      onOpen: () => setBoardState('board'), 
      color: 'text-black',
      iconSrc: '/assets/icons/folder.svg'
    },
    { 
      id: 'bookmark', 
      name: '북마크', 
      Icon: FolderIcon, 
      onOpen: () => setBoardState('bookmarks'), 
      color: 'text-black',
      iconSrc: '/assets/icons/bookmark.svg'
    },
    { 
      id: 'settings', 
      name: '설정', 
      Icon: SettingsIcon, 
      onOpen: () => setSettingsModalOpen(true), 
      color: 'text-black',
      iconSrc: '/assets/icons/settings.svg'
    },
  ];

  const handleCloseBoard = () => {
    setBoardState('closed');
  };

  const handleWallpaperChange = (wallpaperUrl: string) => {
    if (wallpaperUrl) {
      setWallpaper(wallpaperUrl);
      setDefaultImageError(false);
    } else {
      // 빈 문자열이 전달된 경우 회색 배경 사용
      setWallpaper('');
      setDefaultImageError(true);
      localStorage.setItem(WALLPAPER_TYPE_KEY, 'gray');
    }
  };

  const handleLogout = async () => {
    localStorage.setItem(LOGOUT_FLAG_KEY, 'true');
    try {
      await onLogout();
    } catch (error) {
      console.error('Desktop: 로그아웃 오류:', error);
      localStorage.setItem(LOGOUT_FLAG_KEY, 'true');
    }
  };

  useEffect(() => {
    const checkLogoutFlag = () => {
      if (localStorage.getItem(LOGOUT_FLAG_KEY) === 'true') {
        onLogout().catch(err => console.error('자동 로그아웃 오류:', err));
      }
    };
    const interval = setInterval(checkLogoutFlag, 1000);
    return () => clearInterval(interval);
  }, [onLogout]);

  // Mac OS 8 스타일 배경 설정
  const bgStyle = defaultImageError || !wallpaper || wallpaper === '' ?
    { backgroundColor: FALLBACK_BG_COLOR } :
    wallpaper.endsWith('.svg') ?
      {
        backgroundImage: `url(${wallpaper})`,
        backgroundRepeat: 'repeat',
        backgroundColor: FALLBACK_BG_COLOR
      } :
      {
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div
      className="w-screen h-screen"
      onClick={() => setSelectedId(null)}
      style={bgStyle}
    >
      <MenuBar
        onOpenHelp={() => setHelpModalOpen(true)}
        onLogout={handleLogout}
        user={user}
      />
      <div className="w-full h-full pt-16 p-4 flex flex-col flex-wrap content-start">
        {desktopItems.map(item => (
          <button
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(item.id);
              item.onOpen();
            }}
            className="flex flex-col items-center w-28 h-28 space-y-1 focus:outline-none rounded-lg p-2 transition-colors"
          >
            {/* Mac OS 8 스타일 아이콘 */}
            {item.iconSrc ? (
              <img 
                src={item.iconSrc} 
                alt={item.name} 
                className="w-16 h-16"
                onError={(e) => {
                  // 이미지 로드 실패 시 SVG 아이콘으로 대체
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const svgIcon = document.createElement('div');
                    svgIcon.className = `w-16 h-16 ${item.color}`;
                    svgIcon.innerHTML = `<item.Icon className="w-full h-full" />`;
                    parent.insertBefore(svgIcon, target);
                  }
                }}
              />
            ) : (
              <item.Icon className={`w-16 h-16 ${item.color}`} />
            )}
            <span className={`text-base font-semibold px-2 py-0.5 rounded-md ${selectedId === item.id ? 'bg-mac-selection-color text-white' : 'text-black'}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>
      {isHelpModalOpen && <HelpModal isOpen={isHelpModalOpen} onClose={() => setHelpModalOpen(false)} />}
      {isSettingsModalOpen && (
        <SettingsModal
          isOpen={isSettingsModalOpen}
          onClose={() => setSettingsModalOpen(false)}
          onWallpaperChange={handleWallpaperChange}
        />
      )}
      {boardState !== 'closed' && (
        <BulletinBoard
          onClose={handleCloseBoard}
          user={user}
          initialShowBookmarks={boardState === 'bookmarks'}
        />
      )}
    </div>
  );
};

export default Desktop;
