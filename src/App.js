import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExercicesPage from "./pages/Pages/Exercices/Exercices";
import UserPage from "./pages/Pages/UserPage/UserPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter className="page-container">
        <SideBar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/exercices" element={<ExercicesPage />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
