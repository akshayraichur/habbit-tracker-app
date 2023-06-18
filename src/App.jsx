import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Archives from "./screens/Archives";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archives />} />
      </Routes>
    </>
  );
};

export default App;
