import styles from "./Article.module.css"
import { Link } from "react-router"

interface User {
  firstname: string
  lastname: string
  username: string
}

interface Article {
  id: string
  intro: string
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
      <p className={styles.body}>{article.intro}</p>
      <article className={styles.box}>
        <Link to="/" className={styles.link}>
          <span className={styles.wrapper}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </span>
          <span className={styles.text}>Read More</span>
        </Link>
      </article>
    </li>
  )
}

export default Article
