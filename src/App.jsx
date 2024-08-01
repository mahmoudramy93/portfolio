import { Route, Routes } from "react-router-dom";
import { Home, About, Blogs, Projects, BlogDetails } from "./pages/index";
import { store } from "./rtk/app/store";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import "./App.scss";

import Root from "./Root";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blogs/blog/:blogId" element={<BlogDetails />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
