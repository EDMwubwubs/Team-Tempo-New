import Navbar from "./Navbar"
import Project from "./Pages/Project"
import Home from "./PasswordLoginWithFirebase/Home"
import About from "./Pages/About"
import SoundLibrary from "./SoundLibrary";
import Track from "./Pages/Track";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/SoundLibrary" element={<SoundLibrary />} /> 
          <Route path="/Track" element={<Track />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
