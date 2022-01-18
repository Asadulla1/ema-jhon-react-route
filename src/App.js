import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventroy/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Shop />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/review" element={<OrderReview />}></Route>
          <Route exact path="/inventory" element={<Inventory />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
