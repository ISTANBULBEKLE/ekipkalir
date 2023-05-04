import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Contact.module.css'
import { SocialIcon } from 'react-social-icons';

const ContactPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.contactcontainer}>
        <h1 className={styles.contacth1}>Feel free to contact me !</h1>
        <p className={styles.contactp}> Technology continues to evolve and new challenges arise, but there will always be opportunities
            to innovate and create new solutions that can make a positive impact on people&apos;s lives. There might be your idea that can help people. 
            The beauty of web development and software design lies in the ability to create something that is both functional and beautiful, 
            and that can make a real difference in the world. SO WE ARE THERE FOR YOU.</p>
        <div className={styles.contactrow}>
            <SocialIcon 
              url="https://github.com/ISTANBULBEKLE" 
              network="github"
              className={styles.contacta}
              href="https://github.com/ISTANBULBEKLE"
              style={{ height: 50, width: 50 }}
              target='_blank'
              fgColor="#fff"
              />
            <SocialIcon 
              url="https://www.linkedin.com/in/ekip-kalir-428b02177/" 
              className={styles.contacta}
              href="https://www.linkedin.com/in/ekip-kalir-428b02177/"
              target="_blank"
              fgColor="#fff"
              style={{ height: 50, width: 50 }}
            />
            <SocialIcon 
              url="https://www.instagram.com/ekipkalir/" 
              network="instagram"
              className={styles.contacta}
              href="https://www.instagram.com/ekipkalir/"
              target="_blank"
              fgColor="#fff"
              style={{ height: 50, width: 50 }}
            /> 
            <SocialIcon 
              url="https://twitter.com/ekipkalir" 
              network="twitter"
              className={styles.contacta}
              href="https://twitter.com/ekipkalir"
              target="_blank"
              fgColor="#fff"
              style={{ height: 50, width: 50 }}
            />
            <SocialIcon 
              url="https://mail.google.com/mail/ekipkalir" 
              network="email"
              className={styles.contacta}
              href="https://mail.google.com/mail/ekipkalir"
              target="_blank"
              fgColor="#fff"
              style={{ height: 50, width: 50 }}
            />
        </div>
    </div>
  )
}

export default ContactPage