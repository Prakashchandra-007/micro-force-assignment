import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./compponents/pages/Details";
import Main from "./compponents/pages/Main";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="page2" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
