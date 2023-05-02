
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';


const Header = ({}): JSX.Element => {

  return (
    <nav className={styles.headernav}>
        <div className={styles.headerbrand}>
            <Link className={styles.headera} href="/">Ekip Kalir</Link>
        </div>
        <ul className={styles.headerurl}>
            <li className={styles.headerli}>
                <Link className={styles.headera} aria-current="page" href="/">Home</Link>
            </li>
            <li className={styles.headerli}>
                <Link className={styles.headera} href="/about">About</Link>
            </li>
            <li className={styles.headerli}>
                <Link className={styles.headera} href="/projects">Projects</Link>
            </li>
            <li className={styles.headerlilast}>
               <Link className={styles.headera} href="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header;