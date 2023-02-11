import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExercicesPage from "./pages/Pages/Exercices/Exercices";
import UserPage from "./pages/Pages/UserPage/UserPage";
import Login from "./pages/Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter className="page-container">
        <SideBar />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/exercices" element={<ExercicesPage />} />
          <Route path="/userPage" element={<UserPage />} />
          <Route path="" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
