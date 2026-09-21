import styles from "./ContactForm.module.css"
import { useState } from "react"
import { createClient } from "../../services/client"

function ContactForm() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const onFormSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const result = await createClient({ name, email, message })
      console.log({ result })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log({ error })
      }
    }
  }

  return (
    <section className={styles.wrapper}>
      <h5 className={styles.title}>Get in Touch</h5>
      <form onSubmit={onFormSubmit} className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            value={name}
            onChange={onNameChange}
            id="name"
            className={styles.field}
            type="text"
            placeholder="Jane Doe"
            required={true}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            value={email}
            onChange={onEmailChange}
            id="email"
            className={styles.field}
            type="email"
            placeholder="janedoe@mail.com"
            required={true}
          />
        </div>
        <div className={`${styles.group} ${styles.third}`}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            value={message}
            onChange={onMessageChange}
            id="message"
            className={styles.field}
            placeholder="Hi! Are you available right now?"
            required={true}
          ></textarea>
        </div>
        <div className={styles.group}>
          <figure className={styles.box}>
            <button className={styles.submit} type="submit">
              Send Email
            </button>
          </figure>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
