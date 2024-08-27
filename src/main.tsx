import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.scss";
import { Provider } from "react-redux";
import { store } from "@rtk/app/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
