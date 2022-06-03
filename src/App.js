import "./App.css";
import FunctionComponent from "./1_Component/FunctionComponent";
import ClassComponent from "./1_Component/ClassComponent";
import Header from "./1_Component/Header";
import Product from "./1_Component/Product";
import DataBinding from "./2_DataBinding/DataBinding";
import HandlingEvent from "./3_HandlingEvent/HandlingEvent";
import Props from "./4_Props/Props";
import State from "./5_State/State";
import ConditionalRendering from "./6_ConditionalRendering/ConditionalRendering";
import Map from "./7_Map/Map";
import Lifecycle from "./8_Lifecycle/Lifecycle";
import Refs from "./9_Refs/Refs";
import UseState from "./10_Hooks/UseState";
import UseEffect from "./10_Hooks/UseEffect";

import Home from "./BT_HomePage/Home";
import Layout from "./BT_Layout/Layout";
import ShoesShop from "./BT_Props/ShoesShop";
import PhoneShop from "./BT_Product/PhoneShop";
import UserManagement from "./BT_UserManagement/UserManagement";
import UserManagementAPI from "./BT_UserManagementAPI/UserManagement";
import UserManagementHooks from "./BT_UserManagementHooks/UserManagement";

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

    <>
      {/* Lý thuyết */}
      {/* <DataBinding /> */}
      {/* <HandlingEvent /> */}
      {/* <Props /> */}
      {/* <State /> */}
      {/* <ConditionalRendering /> */}
      {/* <Map /> */}
      {/* <Lifecycle /> */}
      {/* <Refs /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}

      {/* Bài tập */}
      {/* <Home /> */}
      {/* <Layout />  */}
      {/* <ShoesShop /> */}
      {/* <PhoneShop /> */}
      {/* <UserManagement /> */}
      {/* <UserManagementAPI /> */}
      <UserManagementHooks />
    </>
  );
}

export default App;
