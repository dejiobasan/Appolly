import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';



function App() {
  return <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/blog" element={<BlogPage/>} />
    </Routes>
  </>;
}

export default App;
