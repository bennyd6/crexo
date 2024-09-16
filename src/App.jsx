import {
  BrowserRouter as Router,
  Routes,
  // Link,
  Route
} from "react-router-dom";

import Header from "./components/header"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Story from "./pages/story"
import Poem from "./pages/poem";
import Quote from "./pages/quote";
import Joke from "./pages/joke";
import Song from "./pages/song";
import Essay from "./pages/essay";
import './App.css'


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/poem" element={<Poem />} />
        <Route path="/essay" element={<Essay />} />
        <Route path="/song" element={<Song />} />
        <Route path="/joke" element={<Joke />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
