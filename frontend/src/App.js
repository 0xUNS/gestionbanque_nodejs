import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ClientScreen from './screens/ClientScreen';
import ClientCreate from './screens/ClientCreate';
import ClientUpdate from './screens/ClientUpdate';

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
            <Route path='*' element={<h3>Page Introuvable</h3>} exact/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
