import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; 
import Home from './pages/Home.jsx'; // Home Page
import ItemList from './pages/ItemList.jsx';
import ReportLost from './pages/ReportLost.jsx';
import ReportFound from './pages/ReportFound.jsx';
import Search from './pages/Search.jsx';
import './index.css'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/list" element={<ItemList />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
        <Route path="/search" element={<Search />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<div className="p-10 text-center"><h2>404 - Page Not Found</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;