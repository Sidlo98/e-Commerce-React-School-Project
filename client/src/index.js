import ReactDOM from "react-dom";
import Navbar from "./components/navigation/navbar/Navbar";

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
  </Provider>,
  document.getElementById("root")
);
