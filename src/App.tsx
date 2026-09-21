import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
