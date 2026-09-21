import ArticleSkeleton from "../../Article/ArticleSkeleton"
import styles from "./ArticlesSkeleton.module.css"

function ArticlesSkeleton() {
  return (
    <ul className={styles.skeleton}>
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
    </ul>
  )
}

export default ArticlesSkeleton
