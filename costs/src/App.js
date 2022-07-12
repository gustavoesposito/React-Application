import Container from './components/layout/Container.js';

import Home from './pages/Home.js';
import Empresa from './pages/Empresa.js';
import Contato from './pages/Contato.js';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer'
import NewProject from './pages/NewProject';

import { BrowserRouter as Router, Routes, Route,   } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Navbar/>
          <Routes>
            <Container>
              <Route path='/' exact='true' element={<Home/>}></Route>
              <Route path='/empresa' element={<Empresa/>}></Route>
              <Route path='/contato' element={<Contato/>}></Route>
              <Route path='/newproject' element={<NewProject/>}></Route>
            </Container>
          </Routes>
          <Footer/>
        </Router>

      </header>
    </div>
  );
}

export default App;
