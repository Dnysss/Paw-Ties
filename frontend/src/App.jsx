import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Content from "./content/Content";
import MyPets from "./components/MyPets";
import ModalPets from "././components/modals/ModalPets";
import Profile from "./components/Profile";
import PetDetails from "./components/PetDetails";
import MyAdopts from "./components/MyAdopts";
import Pets from "./components/Pets";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import EditPet from "./components/EditPet";

import { ModalProvider } from "././components/modals/ModalContext";
import { UserProvider } from "../context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/mypets" element={<MyPets />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/pet/:id" element={<PetDetails />} />
            <Route path="/myadopts" element={<MyAdopts />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pet/edit/:id" element={<EditPet />} />
          </Routes>
          <ModalPets />
        </ModalProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
