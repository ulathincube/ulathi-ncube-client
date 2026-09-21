import styles from "./Article.module.css"

interface User {
  firstname: string
  lastname: string
  username: string
}

interface Article {
  id: string
  title: string
  body: string
  published: boolean
  likes: number
  created: string
  updated: string
  author: User
}

interface Props {
  article: Article
}

function Article({ article }: Props) {
  return (
    <li className={styles.article}>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.body}>{article.body}</p>
    </li>
  )
}

export default Article
