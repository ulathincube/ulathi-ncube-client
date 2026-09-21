import styles from "./Blog.module.css"
import Main from "../../components/Main"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function Blog() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Blog
