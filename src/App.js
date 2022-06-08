import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
