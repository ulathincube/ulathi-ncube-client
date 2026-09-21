import styles from "./ContactForm.module.css"

function ContactForm() {
  return (
    <section className={styles.wrapper}>
      <h5 className={styles.title}>Get in Touch</h5>
      <form className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            className={styles.field}
            type="email"
            placeholder="janedoe@mail.com"
            required={true}
          />
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
