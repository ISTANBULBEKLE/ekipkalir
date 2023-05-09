import React from 'react'
import styles from '@/styles/Layout.module.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Meta from '@/components/Meta'
import ThemeProvider from './ThemeContext';

/**
 * Renders the layout component with children as its child elements
 * 
 * @param children The child elements to render within the layout component
 * @returns The rendered layout component
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
        <ThemeProvider> 
        <Meta 
            title="Ekip kalir Portfolio Page."
            keywords="Software engineer, JavaScript, React / React Native, Swift, SwiftUI, Scala / Scala Play"
            description="Thi is the personal portfolio page of software engineer Ekip Kalir"
        /> 
          <Header />
          <div className={styles.layoutdiv}>
              <main className={styles.layoutmain}>
                {children}
              </main>
          </div>
          <Footer />
          </ThemeProvider>
        </>
   
    )
  }

export default Layout