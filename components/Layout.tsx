import React from 'react';
import layoutStyles from '@/styles/Layout.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Meta from '@/components/Meta';
import { useTheme } from '@/components/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const { theme } = useTheme();

  return (
    <>
      <Meta
        title="Ekip kalir Portfolio Page."
        keywords="Software engineer, JavaScript, React / React Native, Swift, SwiftUI, Scala / Scala Play"
        description="This is the personal portfolio page of software engineer Ekip Kalir"
      />
      <Header style={{ backgroundColor: theme.backgroundColor, color: `var(--text-color)` }} />
      <div className={layoutStyles.div} style={{ backgroundColor: theme.backgroundColor, color: `var(--text-color)` }}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer style={{ backgroundColor: theme.backgroundColor, color: `var(--text-color)` }} />
    </>
  );
};

export default Layout;