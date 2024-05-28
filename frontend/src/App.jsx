import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Content from "./content/Content";
import MyPets from "./components/MyPets";
import { ModalProvider } from "././components/modals/ModalContext";
import ModalPets from "././components/modals/ModalPets";
import Profile from "./components/Profile";
import PetDetails from "./components/PetDetails";
import MyAdopts from "./components/MyAdopts";
import Pets from "./components/Pets";

function App() {
  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/mypets" element={<MyPets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details" element={<PetDetails />} />
          <Route path="/myadopts" element={<MyAdopts />} />
          <Route path="/pets" element={<Pets />} />
        </Routes>
        <ModalPets />
      </ModalProvider>
    </Router>
  );
}

export default App;
