import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {
  FileTextOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  MailOutlined,
  MenuOutlined,
  UserOutlined,
} from '@ant-design/icons';

const navigationItems = [
  { href: '#hero', label: 'Home', icon: <HomeOutlined /> },
  { href: '#about', label: 'About', icon: <UserOutlined /> },
  { href: '#portfolio', label: 'Projects', icon: <FolderOpenOutlined /> },
  { href: '#contact', label: 'Contact', icon: <MailOutlined /> },
];

function NavigationLinks({ onNavigate }) {
  return navigationItems.map(({ href, icon, label }) => (
    <a className={`nav-link${href === '#hero' ? ' active' : ''}`} href={href} key={href} onClick={onNavigate}>
      {icon}
      <span>{label}</span>
    </a>
  ));
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky-top site-header">
      <nav className="navbar navbar-light" id="header" aria-label="Primary navigation">
        <div className="container">
          <a className="navbar-brand" href="#hero" aria-label="CodeByAbhi home">
            <img src="./img/img1.png" width="250" loading="eager" alt="CodeByAbhi Logo" />
          </a>

          <div className="header-actions" id="site-navigation">
            <NavigationLinks />
            <Button
              className="header-resume"
              icon={<FileTextOutlined />}
              href="https://drive.google.com/file/d/1AelBBKS6HIzF2joSTlxOALZutTNm4H3R/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Button>
          </div>

          <Button
            className="mobile-menu-button"
            type="text"
            icon={<MenuOutlined />}
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
          />

          <Drawer
            className="site-navigation-drawer"
            title="Navigation"
            placement="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <div className="drawer-navigation">
              <NavigationLinks onNavigate={() => setMenuOpen(false)} />
              <Button
                className="header-resume"
                icon={<FileTextOutlined />}
                href="https://drive.google.com/file/d/1AelBBKS6HIzF2joSTlxOALZutTNm4H3R/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </Button>
            </div>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}

export default Header;
