// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import Project2 from './pages/Project2';
import NotFound from './pages/NotFound';
import AboutME from './pages/AboutME'
import Aboutme2 from './pages/Aboutme2';
import Contact from './pages/Contact';


function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        {/* MAIN PAGES */}
        <Route index element={<Home />} />
        <Route path="about" element={<Aboutme2 type="portfolio" />} />
        <Route path="projects" element={<Project2 />} />
        <Route path="contact" element={<Contact />} />
        {/* ERROR 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;