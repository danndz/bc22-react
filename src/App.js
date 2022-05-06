import "./App.css";
import FunctionComponent from "./1_Component/FunctionComponent";
import ClassComponent from "./1_Component/ClassComponent";
import Header from "./1_Component/Header";
import Product from "./1_Component/Product";
import Home from "./BT_HomePage/Home";
import Layout from "./BT_Layout/Layout";

// React component
function App() {
  const title = "Hello React";

  // JSX: Javascript XML - cho phép viết HTML trong javascript
  return (
    // <div className="App">
    //   <h1 className="text-primary">{title}</h1>
    //   <label htmlFor="username">Username</label>
    //   <input type="text" id="username" />
    //   {/* Gọi tới 1 component khác */}
    //   <FunctionComponent></FunctionComponent>
    //   <ClassComponent />
    //   <Header />
    //   <Product />
    // </div>

    // Bài tập 1: Dàn layout Home
    // <Home />
    // Bài tập 2: Dàn layout Bootstrap
    <Layout />
  );
}

export default App;






