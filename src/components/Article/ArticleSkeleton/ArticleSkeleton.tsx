import styles from "./ArticleSkeleton.module.css"

function ArticleSkeleton() {
  return (
    <li className={styles.skeleton}>
      <h3 className={styles.title}>&nbsp;</h3>
      <p className={styles.body}>&nbsp;</p>
    </li>
  )
}

export default ArticleSkeleton
