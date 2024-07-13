import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Blogs } from "./pages/index";

import "./App.scss";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
