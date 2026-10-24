import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Portfolio from "./pages/Portfolio"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
