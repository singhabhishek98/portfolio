import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import {
  ClockCircleOutlined,
  CloudOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  MailOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
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

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return { icon: <SunOutlined />, text: 'Good Morning', tone: 'morning' };
  if (hour === 12) return { icon: <ClockCircleOutlined />, text: 'Good Noon', tone: 'noon' };
  if (hour >= 13 && hour < 17) return { icon: <SunOutlined />, text: 'Good Afternoon', tone: 'afternoon' };
  if (hour >= 17 && hour < 21) return { icon: <CloudOutlined />, text: 'Good Evening', tone: 'evening' };
  return { icon: <MoonOutlined />, text: 'Good Night', tone: 'night' };
}

function TimeGreeting() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const greeting = getGreeting(now.getHours());
  return (
    <span className={`time-greeting time-greeting--${greeting.tone}`}>
      {greeting.tone === 'morning' && (
        <span className="morning-sky" aria-hidden="true">
          <span className="morning-cloud">☁</span>
          <span className="morning-bird">🕊</span>
          <span className="morning-bird">🕊</span>
        </span>
      )}
      {greeting.tone === 'noon' && <span className="greeting-scene noon-scene" aria-hidden="true">✦ ☀ ✦</span>}
      {greeting.tone === 'afternoon' && <span className="greeting-scene afternoon-scene" aria-hidden="true">☀　☁</span>}
      {greeting.tone === 'evening' && <span className="greeting-scene evening-scene" aria-hidden="true">☁　◉</span>}
      {greeting.tone === 'night' && <span className="greeting-scene night-scene" aria-hidden="true">✦　·　✦</span>}
      {greeting.icon}
      <span>{greeting.text}</span>
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky-top site-header">
      <nav className="navbar navbar-light" id="header" aria-label="Primary navigation">
        <div className="container">
          <a className="navbar-brand greeting-brand" href="#hero" aria-label="Go to home">
            <TimeGreeting />
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
