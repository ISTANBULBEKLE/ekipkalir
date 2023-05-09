import React from 'react'
import aboutStyles from '@/styles/About.module.css'
import Image from 'next/image';



const AboutPage:React.FC = (): JSX.Element => {
  return (
    <>
      <section className={aboutStyles.section}>
        <Image
              src="/images/ekip-kalir.png"
              width={300}
              height={300}
              alt="ekip kalir profile picture"
              className={aboutStyles.img}
        />
        <h1 className={aboutStyles.h1}>Ekip Kalir</h1>
        <h2 className={aboutStyles.h2}>Full Stack Engineer</h2>
        <p className={aboutStyles.p}> 
          Ekip is a highly skilled Full Stack Engineer. 
          In the past few years he has been involved in many aspects
          of modern software development from mobile app development, 
          through microservices running in the cloud, to front-end design
          and implementation. He is a passionate, dedicated and diligent
          Software Engineer who wants to push the limits in software development.
          He has a strong background and skills in programming, project management, 
          business analysis, team building and team management. 
        </p>
      </section>
      <section className={aboutStyles.section}>
        <h2 className={aboutStyles.h2}>Tech Stack</h2>
        <p className={aboutStyles.p}>
          Ekip has a proven track
          record of analytical and problem-solving skills with robust communication
          and collaborative working. He is highly skilled in React/React Native, 
          Swift/SwiftUI with frontend and backend capabilities and Scala/Scala Play 
          framework. </p>
        <ul className={aboutStyles.ul}>
          <li className={aboutStyles.li}>JavaScript</li>
          <li className={aboutStyles.li}>CSS-3</li>
          <li className={aboutStyles.li}>HTML-5</li>
          <li className={aboutStyles.li}>React.js</li>
          <li className={aboutStyles.li}>Next.js</li>
          <li className={aboutStyles.li}>Swift</li>
          <li className={aboutStyles.li}>SwiftUI</li>
          <li className={aboutStyles.li}>Scala</li>
          <li className={aboutStyles.li}>Scala/Play</li>
          <li className={aboutStyles.li}>Python</li>
          <li className={aboutStyles.li}>AWS</li>
          <li className={aboutStyles.li}>SQL</li>
          <li className={aboutStyles.li}>GraphQL</li>
          <li className={aboutStyles.li}>MongoDB</li>
        </ul>
      </section>
    </>
  )
}

export default AboutPage;