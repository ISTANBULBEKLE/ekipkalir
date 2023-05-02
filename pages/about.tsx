import React from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image';
const AboutPage = () => {
  return (
    <div className={styles.aboutdiv}>
        <Image
              src="/images/ekip-kalir.png"
              width={300}
              height={300}
              alt="ekip kalir profile picture"
              className={styles.aboutimg}
        />
        <h1 className={styles.abouth1}>Ekip Kalir</h1>
        <h2 className={styles.abouth2}>Full Stack Engineer</h2>
        <p className={styles.aboutp}> 
          Ekip is a highly skilled Full Stack Engineer. 
          In the past few years he has been involved in many aspects
          of modern software development from mobile app development, 
          through microservices running in the cloud, to front-end design
          and implementation. He is a passionate, dedicated and diligent
          Software Engineer who wants to push the limits in software development.
          He has a strong background and skills in programming, project management, 
          business analysis, team building and team management. He has a proven track
          record of analytical and problem-solving skills with robust communication
          and collaborative working. He is highly skilled in React/React Native, 
          Swift/SwiftUI with frontend and backend capabilities and Scala/Scala Play 
          framework. 
        </p>
    </div>
  )
}

export default AboutPage;