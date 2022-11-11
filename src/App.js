import './index.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';
import {
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
     
      </Routes>
    </div>
  );
}

export default App;
