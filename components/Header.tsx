
import React from 'react';
import Link from 'next/link';
import headerStyles from '@/styles/Header.module.css';
import Switch from '@/components/Switch';


const Header = ({}): JSX.Element => {

  return (
    <nav className={headerStyles.nav}>
        <div className={headerStyles.brand}>
            <Link className={headerStyles.a} href="/">Ekip Kalir</Link>
        </div>
        <ul className={headerStyles.url}>
            <li className={headerStyles.li}>
                <Link className={headerStyles.a} aria-current="page" href="/">Home</Link>
            </li>
            <li className={headerStyles.li}>
                <Link className={headerStyles.a} href="/about">About</Link>
            </li>
            <li className={headerStyles.li}>
                <Link className={headerStyles.a} href="/projects">Projects</Link>
            </li>
            <li className={headerStyles.lilast}>
               <Link className={headerStyles.a} href="/contact">Contact</Link>
            </li>
            <li>
                <Switch />
            </li>
        </ul>
    </nav>
  )
}

export default Header;