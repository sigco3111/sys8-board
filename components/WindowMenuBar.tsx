import React, { useState, useEffect, useRef } from 'react';
import type { Menu, MenuItem as MenuItemType } from '../types';

const SubMenu: React.FC<{ items: MenuItemType[]; closeAllMenus: () => void }> = ({ items, closeAllMenus }) => {
  return (
    <div className="absolute left-full -top-1 mt-0 w-48 bg-mac-os8-window-bg border border-mac-os8-border-color shadow-mac-window py-1 z-20">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} closeAllMenus={closeAllMenus} />
      ))}
    </div>
  );
};

const MenuItem: React.FC<{ item: MenuItemType; closeAllMenus: () => void }> = ({ item, closeAllMenus }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  if ('label' in item) {
    const hasSubMenu = !!(item.items && item.items.length > 0);

    const handleItemClick = () => {
      if (item.disabled) return;
      if (item.action) {
        item.action();
      }
      if (!hasSubMenu) {
        closeAllMenus();
      }
    };

    return (
      <div
        className="relative"
        onMouseEnter={() => hasSubMenu && !item.disabled && setIsSubMenuOpen(true)}
        onMouseLeave={() => hasSubMenu && !item.disabled && setIsSubMenuOpen(false)}
      >
        <button
          onClick={handleItemClick}
          disabled={item.disabled}
          className={`w-full text-left px-3 py-1 text-mac-os8-text-color text-xs flex justify-between items-center
          ${item.disabled
            ? 'text-gray-400'
            : 'hover:bg-mac-os8-selection-color hover:text-white'
          }`}
        >
          <span>{item.label}</span>
          {hasSubMenu && <span className="text-xs">▶</span>}
        </button>
        {isSubMenuOpen && hasSubMenu && !item.disabled && item.items && (
          <SubMenu items={item.items} closeAllMenus={closeAllMenus} />
        )}
      </div>
    );
  }

  return <div className="h-px bg-mac-os8-border-shadow my-1 mx-2" />;
};

const MenuDropdown: React.FC<{ menu: Menu; closeAllMenus: () => void }> = ({ menu, closeAllMenus }) => {
  return (
    <div className="absolute left-0 mt-1 w-56 bg-mac-os8-window-bg border border-mac-os8-border-color shadow-mac-window py-1 z-10">
      {menu.items.map((item, index) => (
        <MenuItem key={index} item={item} closeAllMenus={closeAllMenus} />
      ))}
    </div>
  );
};

interface WindowMenuBarProps {
  menus: Menu[];
}

const WindowMenuBar: React.FC<WindowMenuBarProps> = ({ menus }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  }

  return (
    <div 
      ref={menuBarRef} 
      data-menu-bar 
      className="relative flex items-center h-6 bg-mac-os8-menubar-color border-b border-mac-os8-border-color px-2 text-xs text-mac-os8-text-color flex-shrink-0"
    >
      {menus.map((menu) => (
        <div key={menu.name} className="relative">
          <button 
            onClick={() => handleMenuToggle(menu.name)}
            className={`px-3 py-0.5 ${activeMenu === menu.name ? 'bg-mac-os8-selection-color text-white' : 'hover:bg-mac-os8-selection-color hover:text-white'}`}
          >
            {menu.name}
          </button>
          {activeMenu === menu.name && (
            <MenuDropdown menu={menu} closeAllMenus={() => setActiveMenu(null)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default WindowMenuBar;