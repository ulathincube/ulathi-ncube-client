import styles from "./MenuIcon.module.css"
import MobileMenu from "../MobileMenu"
import { useState, useEffect } from "react"

const container: HTMLElement = document.querySelector("#modal")!

const showContainer = () => {
  container.style.display = "flex"
  container.style.visibility = "visible"
  container.style.pointerEvents = "all"
}

const hideContainer = () => {
  container.style.display = "none"
  container.style.visibility = "hidden"
  container.style.pointerEvents = "none"
}

function MenuIcon() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    if (showMenu) {
      showContainer()
    } else {
      hideContainer()
    }

    return () => {
      hideContainer()
    }

    return () => {}
  }, [showMenu])

  const onShowMenu = () => {
    setShowMenu(true)
  }

  const onHideMenu = () => {
    setShowMenu(false)
  }

  return (
    <>
      <button
        onClick={showMenu ? onHideMenu : onShowMenu}
        className={styles.wrapper}
      >
        {!showMenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.icon}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
        {showMenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.icon}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>
      {showMenu && <MobileMenu />}
    </>
  )
}

export default MenuIcon
