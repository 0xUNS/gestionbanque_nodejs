import logo from '../logo.svg';

function HomeScreen() {
    return (
        <div className="py-5" style={{textAlign: "center"}}>
            <h1><i class="fa-solid fa-n"></i><i class="fa-light fa-e"></i><i class="fa-regular fa-circle"></i>&ensp;<i class="fa-regular fa-b"></i>ank</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Systeme de gestion des clients et des comptes bancaire</p>
            <br /><br /><br /><br /><br />
            <h1><i class="fa-brands fa-node-js"></i>  &ensp; <i class="fa-brands fa-react"></i></h1>
            <br /><br /><br /><br /><br />
        </div>
    )
}

export default HomeScreen