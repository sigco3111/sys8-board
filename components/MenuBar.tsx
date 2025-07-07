import React, { useState, useEffect, useRef } from 'react';
import { AppleIcon, WifiIcon, BatteryIcon, SearchIcon } from './icons';
import type { User } from '../types';

interface MenuBarProps {
  onOpenHelp: () => void;
  onLogout: () => void;
  user: User;
}

const MenuBar: React.FC<MenuBarProps> = ({ onOpenHelp, onLogout, user }) => {
  const [time, setTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  
  const handleMenuAction = (action?: (() => void) | undefined) => {
    if (action) {
      console.log('MenuBar: 메뉴 액션 호출됨');
      action();
    }
    setActiveMenu(null);
  };

  // 로그아웃 핸들러 직접 래핑
  const handleLogout = () => {
    console.log('MenuBar: 로그아웃 함수 호출됨');
    onLogout();
  };

  const menuItems = [
    { 
      name: '이동', 
      items: [
        { label: 'AI 테크 허브', action: () => window.open('https://tech-toolkit-hub.vercel.app/', '_blank', 'noopener,noreferrer'), disabled: false },
        { label: '데브캔버스', action: () => window.open('https://dev-canvas-pi.vercel.app/', '_blank', 'noopener,noreferrer'), disabled: false }
      ] 
    },
    { 
      name: '도움말', 
      items: [{ label: '사용법 보기', action: onOpenHelp, disabled: false }] 
    },
  ];

  const appleMenuItems = [
    { label: '이 Mac에 관하여', action: () => {}, disabled: true },
    { isSeparator: true },
    { label: '로그아웃...', action: handleLogout, disabled: false }
  ];

  return (
    <div 
        ref={menuRef}
        className="fixed top-0 left-0 right-0 h-6 bg-mac-os8-menubar-color border-b border-mac-os8-border-color z-50 flex items-center justify-between px-2 text-xs text-mac-os8-text-color"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={() => handleMenuToggle('apple')} className="hover:bg-mac-os8-selection-color hover:text-white px-2 py-0.5">
            <AppleIcon className="w-4 h-4 text-mac-os8-text-color fill-current" />
          </button>
          {activeMenu === 'apple' && (
            <div className="absolute left-0 mt-1 w-56 bg-mac-os8-window-bg border border-mac-os8-border-color shadow-mac-window py-1">
              {appleMenuItems.map((item, index) => (
                item.isSeparator ? <div key={`sep-${index}`} className="h-px bg-mac-os8-border-shadow my-1 mx-1" /> :
                 <button
                  key={item.label}
                  onClick={() => handleMenuAction(item.action)}
                  disabled={item.disabled}
                  className={`w-full text-left px-3 py-1 text-mac-os8-text-color text-xs ${item.disabled ? 'text-gray-400' : 'hover:bg-mac-os8-selection-color hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <b className="font-bold">Finder</b>
        {menuItems.map(menu => (
          <div key={menu.name} className="relative">
            <button 
              onClick={() => handleMenuToggle(menu.name)} 
              className={`px-2 py-0.5 ${activeMenu === menu.name ? 'bg-mac-os8-selection-color text-white' : 'hover:bg-mac-os8-selection-color hover:text-white'}`}
            >
              {menu.name}
            </button>
            {activeMenu === menu.name && menu.items.length > 0 && (
              <div className="absolute left-0 mt-1 w-48 bg-mac-os8-window-bg border border-mac-os8-border-color shadow-mac-window py-1">
                {menu.items.map(item => (
                   <button
                    key={item.label}
                    onClick={() => handleMenuAction(item.action)}
                    disabled={item.disabled}
                    className={`w-full text-left px-3 py-1 text-mac-os8-text-color text-xs ${item.disabled ? 'text-gray-400' : 'hover:bg-mac-os8-selection-color hover:text-white'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-3">
        <span className="font-medium text-xs">{user.displayName}</span>
        <button 
          onClick={handleLogout} 
          className="mac-button text-xs py-0 px-2"
        >
          로그아웃
        </button>
        <BatteryIcon className="w-4 h-4"/>
        <WifiIcon className="w-3.5 h-3.5" />
        <SearchIcon className="w-3.5 h-3.5" />
        <span className="text-xs">{time.toLocaleDateString('ko-KR', { weekday: 'short', month: 'long', day: 'numeric' })}</span>
        <span className="text-xs">{time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
};

export default MenuBar;
