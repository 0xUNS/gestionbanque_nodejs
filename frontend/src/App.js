import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ClientScreen from './screens/ClientScreen';
import ClientCreate from './screens/ClientCreate';
import ClientUpdate from './screens/ClientUpdate';
import CompteScreen from './screens/CompteScreen';
import CompteCreate from './screens/CompteCreate';
import CompteUpdate from './screens/CompteUpdate';
import LoginCreate from './screens/LoginCreate';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path='/client' element={<ClientScreen />} />
            <Route path='/client/create' element={<ClientCreate />} />
            <Route path='/client/edit/:id' element={<ClientUpdate />} />

            <Route path='/compte' element={<CompteScreen />} />
            <Route path='/compte/create' element={<CompteCreate />} />
            <Route path='/compte/edit/:id' element={<CompteUpdate />} />

            <Route path='/login/create' element={<LoginCreate />} />
            <Route path='/login/' element={<LoginScreen />} />

            <Route path='*' element={<h3>Page Introuvable</h3>} exact/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
