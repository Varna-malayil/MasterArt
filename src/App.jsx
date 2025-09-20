import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShowcasePage from "./pages/ShowcasePage"
import ContactPage from "./pages/ContactPage"
import NewsPage from "./pages/NewsPage"
import CategoryPage from "./pages/CategoryPage"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default App
