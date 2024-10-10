import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BodyDetails from './Pages/BodyDetails';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuerpo/:id" element={<BodyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

