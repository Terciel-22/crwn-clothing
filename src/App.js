import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () => {
  return (
    <div>
      <h1>I am Shop page</h1>
    </div>
  );
};
const App = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="shop" element={<Shop />} />
    </Route>
  </Routes>
);

export default App;
