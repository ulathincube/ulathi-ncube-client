import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Blog from "./pages/Blog"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
