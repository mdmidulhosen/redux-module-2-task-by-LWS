import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import "./custom-css/global.css";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </>
  );
}

export default App;
