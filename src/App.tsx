import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Portfolio from "./pages/Portfolio"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Toast from "./components/Toast"
import ToastContext from "./store/ToastContext"
import { useState } from "react"

const TIMEOUT = 3000

function App() {
  const [toastMessage, setToastMessage] = useState<string>("")

  const onSetMessage = (newMessage: string) => {
    setToastMessage(newMessage)
    setTimeout(() => {
      setToastMessage("")
    }, TIMEOUT)
  }

  return (
    <Router>
      <ToastContext value={{ message: toastMessage, onSetMessage }}>
        {!!toastMessage && <Toast />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ToastContext>
    </Router>
  )
}

export default App
