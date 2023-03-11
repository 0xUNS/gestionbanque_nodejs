import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import ClientScreen from './screens/ClientScreen';
import ClientCreate from './screens/ClientCreate';
import ClientUpdate from './screens/ClientUpdate';
import CompteScreen from './screens/CompteScreen';
import CompteCreate from './screens/CompteCreate';
import CompteUpdate from './screens/CompteUpdate';
import LoginCreate from './screens/LoginCreate';
import LoginScreen from './screens/LoginScreen';
import jwtDecode from "jwt-decode";

function App() {
    let auth = false
    try{
        const jwt = jwtDecode(localStorage.getItem("loggedUser"))
        auth = Date.now() / 1000 < jwt?.exp
    }catch{
        auth = false
    }

  return (
      <Router>
            <Header auth={auth} />
              <main className="py-5">
            <Container>

                <Routes>
                    <Route path='/' element={<HomeScreen />}  exact/>

                    <Route path='/client' element={auth ? <Dashboard /> : <Navigate to="/login" /> } >
                        <Route path='' element={<ClientScreen />} />
                        <Route path='create' element={<ClientCreate />} />
                        <Route path='edit/:id' element={<ClientUpdate />} />
                    </Route>

                    <Route path='/compte' element={auth ? <Dashboard /> : <Navigate to="/login" /> } >
                        <Route path='' element={<CompteScreen />} />
                        <Route path='create' element={<CompteCreate />} />
                        <Route path='edit/:id' element={<CompteUpdate />} />
                    </Route>

                    <Route path='/signup' element={<LoginCreate />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/logout' element={<Navigate to="/" />} onEnter={()=>localStorage.removeItem("loggedUser")} exact/>

                    <Route path='*' element={<h3>Page Introuvable</h3>} exact/>
                </Routes>
            </Container>
              </main>
            <Footer />
        </Router>
  );
}

export default App;
