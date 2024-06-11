import "./App.css";
import { ActionsNavbar } from "./components/ActionsNavbar/ActionsNavbar";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Actions } from "./views/Actions/Actions";
import { Login } from "./views/Authentication/Login";
import { Register } from "./views/Authentication/Register";
import { Home } from "./views/Home/Home";
import { MyAppointments } from "./views/My Appointments/MyAppointments";
import { MyProfile } from "./views/My Profile/MyProfile";
import { Routes, Route, useLocation } from "react-router-dom";
import { Schedule } from "./views/Schedule/Schedule";
import { Welcome } from "./components/Welcome/Welcome";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const { welcome } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      {welcome ? <Welcome /> : null}
      {location.pathname === "/" ? <ActionsNavbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
