import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Contact.module.css'

const ContactPage = () => {
  return (
    <div className={styles.contactcontainer}>
        <h1 className={styles.contacth1}>Feel free to contact me !</h1>
        <p className={styles.contactp}> Technology continues to evolve and new challenges arise, but there will always be opportunities
            to innovate and create new solutions that can make a positive impact on people's lives. There might be your idea that can help people. 
            The beauty of web development and software design lies in the ability to create something that is both functional and beautiful, 
            and that can make a real difference in the world. SO WE ARE THERE FOR YOU.</p>
        <div className={styles.contactrow}>
            <Link className={styles.contacta} href="https://github.com/ISTANBULBEKLE" target="_blank" rel="noreferrer">Github</Link>
            <Link className={styles.contacta} href="https://www.linkedin.com/in/ekip-kalir-428b02177/" target="_blank" rel="noreferrer">LinkedIn</Link>
            <Link className={styles.contacta} href="https://www.instagram.com/ekipkalir/" target="_blank" rel="noreferrer">Instagram</Link>
            <Link className={styles.contacta} href="https://twitter.com/ekipkalir" target="_blank" rel="noreferrer">Twitter</Link>
            <Link className={styles.contacta} href="https://mail.google.com/mail/ekipkalir" target="_blank" rel="noreferrer">Gmail</Link>
        </div>
    </div>
  
  )
}

export default ContactPage