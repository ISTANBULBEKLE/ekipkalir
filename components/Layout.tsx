import React from 'react'
import styles from '@/styles/Layout.module.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Renders the layout component with children as its child elements
 * 
 * @param children The child elements to render within the layout component
 * @returns The rendered layout component
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
          <Header />
          <div className={styles.layoutdiv}>
              <main className={styles.layoutmain}>
                {children}
              </main>
          </div>
          <Footer />
        </>
   
    )
  }

export default Layout