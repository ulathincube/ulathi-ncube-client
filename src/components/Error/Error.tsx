import styles from "./Error.module.css"

function Error() {
  return (
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
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>Hmm...something went wrong</h3>
        <p className={styles.description}>
          Try refreshing the page or try again later.
        </p>
        <div className={styles.container}>
          <button className={styles.action}>
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
            <span className={styles.text}>Retry</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Error
