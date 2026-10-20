import styles from "./NotFound.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router"

function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.box}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.big}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>404</h3>
          <p className={styles.description}>This page could not be found.</p>
          <div className={styles.container}>
            <Link to="/" className={styles.link}>
              <span className={styles.box}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.small}
                >
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </span>
              <span className={styles.text}>Go Home</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
