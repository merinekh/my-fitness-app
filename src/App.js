import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
import Page from "./pages/Pages/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter className="page-container">
        <SideBar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/videoUpload" element={<Page />} />
          <Route path="/:Id" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
