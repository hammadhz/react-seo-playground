import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientSEO from "./pages/ClientSEO";
import Blog from "./pages/Blog";
import Layout from "./Layout/Layout";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/client-seo" element={<ClientSEO />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
