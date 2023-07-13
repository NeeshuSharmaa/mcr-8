import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Landing from "./pages/landing/Landing";
import EventDetails from "./pages/eventDetails/EventDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </>
  );
}

export default App;
