import styles from "./Articles.module.css"
import Article from "../Article"
import { getAllArticles } from "../../services/article"
import { useQuery } from "@tanstack/react-query"

function Articles() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allArticles"],
    queryFn: getAllArticles,
  })

  if (isPending) return <div>...Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <ul className={styles.articles}>
      {data.data.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ul>
  )
}

export default Articles
