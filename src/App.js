import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import Aboutme from './Aboutme';
import Resume from './Resume';
import Education from './Education';
import Contact from './Contact';
import { ErrorBoundary } from './Errorboundary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="Home" element={<Home/>} />
              <Route path="Education" element={<Education/>} />
              <Route path="Aboutme" element={<Aboutme/>} />
              <Route path="Resume" element={<Resume/>} />
              <Route path="Contact" element={<ErrorBoundary><Contact/></ErrorBoundary>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
