import {server} from '../config/index'
import React, {useState} from 'react'
import styles from '@/styles/Contact.module.css'
import { SocialIcon } from 'react-social-icons';




const ContactPage: React.FC = ({notes}): JSX.Element => {
  const [name, setName] = useState('')
  const[surName, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    }
    if (e.target.name === 'surname') {
      setSurname(e.target.value)
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value)
    } 
  }
const handleSubmit = ()=>{
  //Code need to be added for the db.json adding the 
  setSent(true)
}

  return (
    <>
    <div>
    <section className={styles.contactsection}>
      <h1 className={styles.contacth1}>Feel free to contact me !</h1>
      <p className={styles.contactp}> Technology continues to evolve and new challenges arise, but there will always be opportunities
            to innovate and create new solutions that can make a positive impact on people&apos;s lives. There might be your idea that can help people. 
            The beauty of web development and software design lies in the ability to create something that is both functional and beautiful, 
            and that can make a real difference in the world. SO WE ARE THERE FOR YOU.
      </p>
      </section>
      <section className={styles.contactsection}>
        <h2 className={styles.formh2}>Get In Touch</h2>
        <form className={styles.form}>
          <div className={styles.formgroup}>
            <label className={styles.formgrouplabel} htmlFor="name">Name</label>
            <input className={styles.forminput} type="text" id="name" name="name" value={name} onChange={handleChange} />
          </div>
          <div className={styles.formgroup}>
            <label className={styles.formgrouplabel} htmlFor="surname">Surname</label>
            <input className={styles.forminput} type="text" id="surname" name="surname" value={surName} onChange={handleChange} />
          </div>
          <div className={styles.formgroup}>
            <label className={styles.formgrouplabel} htmlFor="email">Email Address</label>
            <input className={styles.forminput} type="email" id="email" name="email" value={email} onChange={handleChange} />
          </div>
          <div className={styles.formgroup}>
            <label className={styles.formgrouplabel} htmlFor="note">Note</label>
            <textarea className={styles.formtextarea} id="note" name="note" rows={5}  value={message} onChange={handleChange}/>
          </div>
          <div className={styles.formgroup}>
            <button type="submit" className={styles.submitbtn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </section>
{/* 
      <section className={styles.contactsection}>
        
          <ul >
          { notes.map((note)=> (
            <>
                <p> This is the note {note.id}</p>
                <li key={note.name}>{note.name}</li>
                <li key={note.surName}>{note.surName}</li>
                <li key={note.email}>{note.email}</li>
                <li key={note.note}> {note.note}</li>
            </>
          ))}
            </ul>
      </section> */}

      <section className={styles.contactsection}>
        <h2>Follow me !</h2>
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
        </section>
      </div>
    </>
  )
}

export default ContactPage;


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/notes`);
  const notes = await res.json()
  return {
    props: {
      notes,
    }
  }
}
