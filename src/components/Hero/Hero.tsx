import styles from "./Hero.module.css"
import { motion } from "motion/react"

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.hero}
    >
      <h1 className={styles.title}>Hello, I'm Ulathi</h1>
      <p className={styles.bio}>
        I'm a FullStack Developer, with{" "}
        <span className={styles.highlight}>React</span> and{" "}
        <span className={styles.highlight}>NodeJS</span> experience. I love all
        things that have to do with programming, computers and databases. I use
        Postgres a lot, and yes did I say I love programming?
      </p>
    </motion.section>
  )
}

export default Hero
