import styles from "./Portfolio.module.css"
import { Link } from "react-router"

interface ProjectProps {
  name: string
  bio: string
  link: string
}

function PortfolioProject({ name, bio, link }: ProjectProps) {
  return (
    <li className={styles.project}>
      <article className={styles.details}>
        <h4 className={styles.title}>{name}</h4>
        <p className={styles.bio}>{bio}</p>
      </article>
      <article className={styles.box}>
        <Link className={styles.link} target="_blank" to={link}>
          Learn More
        </Link>
      </article>
    </li>
  )
}

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <article className={styles.info}>
        <h3 className={styles.heading}>Portfolio</h3>
      </article>
      <ul className={styles.projects}>
        <PortfolioProject
          name="Where's Waldo"
          bio="A board game that tasks the player to search for characters and record time"
          link="https://google.com"
        />
        <PortfolioProject
          name="File Uploader"
          bio="A file upload service for storing files on an online storage service."
          link="https://google.com"
        />
        <PortfolioProject
          name="Message-Me"
          bio="A simple messaging client for chatting with random users on the internet and find new friends"
          link="https://google.com"
        />
      </ul>
    </section>
  )
}

export default Portfolio
