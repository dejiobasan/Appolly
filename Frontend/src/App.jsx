import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Blog" element={<BlogPage/>} />
    </Routes>
  </>;
}

export default App;
