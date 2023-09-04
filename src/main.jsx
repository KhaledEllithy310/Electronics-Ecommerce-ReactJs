import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "toastr//build/toastr.css";
import "toastr//build/toastr.min.js";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./app/store";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
// import 'toastr/toastr.js'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
