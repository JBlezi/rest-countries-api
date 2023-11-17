import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';
import CountryDetail from './CountryDetail';


function App() {
  return (
  <Router basename="/">
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryDetail />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
