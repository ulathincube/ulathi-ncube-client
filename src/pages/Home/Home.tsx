import styles from "./Home.module.css"
import { getAllArticles } from "../../services/article"
import { useQuery } from "@tanstack/react-query"

function Home() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allArticles"],
    queryFn: getAllArticles,
  })

  if (isPending) return <div>...Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <div className={styles.wrapper}>
      Home is where the heart is
      <ul>
        {data.data.map((articleObject) => (
          <li key={articleObject.id}>
            <h2>{articleObject.title}</h2>
            <p>{articleObject.body}</p>
            <div>{articleObject.author.username}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
