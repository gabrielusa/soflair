import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/css/reset.css';


function App() {
  return (
    <div className="App">
      {/* Parte de cima do site */}
      <Header/>

      {/* Conteúdo do site */}
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </Router>

      {/* Parte baixa do site */}
      <Footer/>
    </div>
  );
}

export default App;
