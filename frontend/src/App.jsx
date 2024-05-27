import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Content from "./content/Content";
import Pets from "./components/Pets";
import { ModalProvider } from "././components/modals/ModalContext";
import ModalPets from "././components/modals/ModalPets";
import Profile from "./components/Profile";
import PetDetails from "./components/PetDetails";

function App() {
  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/mypets" element={<Pets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details" element={<PetDetails />} />
        </Routes>
        <ModalPets />
      </ModalProvider>
    </Router>
  );
}

export default App;
