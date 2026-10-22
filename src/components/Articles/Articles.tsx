import styles from "./Articles.module.css"
import Article from "../Article"
import { getAllArticles } from "../../services/article"
import { useQuery } from "@tanstack/react-query"
import ArticlesSkeleton from "./ArticlesSkeleton"
import Error from "../Error"

function Articles() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allArticles"],
    queryFn: getAllArticles,
    retry: 3,
  })

  if (isPending) return <ArticlesSkeleton />
  if (isError && error) return <Error />

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Articles</h1>
      <ul className={styles.articles}>
        {data.data.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
      <article className={styles.box}>
        <button className={styles.fetch}>Show More</button>
      </article>
    </section>
  )
}

export default Articles
