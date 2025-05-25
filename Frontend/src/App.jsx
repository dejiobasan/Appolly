import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import BlogDetails from "./components/BlogDetails";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/blog-details" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
