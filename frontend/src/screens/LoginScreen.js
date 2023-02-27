import React, { useState } from 'react';
import { Row, Col, Alert, Form, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import loginService from '../services/authService'



function LoginScreen() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function handleLogin(element){
        element.preventDefault();
        try {
            const user = await loginService.login({ userName, password });
            window.localStorage.setItem('loggedUser', JSON.stringify(user));
            navigate('/');
        } catch (exception) {
            setError(true);
            setErrorMessage("Informations d'identification erronées");
        }
    }

    return (
        <Row className="justify-content-center">
            {error && <Alert variant="danger">{errorMessage}</Alert>}
            <Col md={6}>
                <h3>Connexion</h3>
                <Form onSubmit={(element)=>handleLogin(element)}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Nom d'utilisateur ou adresse email</Form.Label>
                            <Form.Control type="text" value={userName} onChange={({ target }) => setUserName(target.value)} placeholder="Entrer nom d'utilisateur ou adresse email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Entrer un mot de passe" required/>
                        </Form.Group>
                        <Form.Check type="checkbox" label="Se souvenir de moi" className="m-3"/>
                        
                        <Stack direction="horizontal" gap={3} className="m-3">
                            <Button variant="primary" className="rounded-pill" type="submit">
                                Se connecter
                            </Button>
                            <Button onClick={() => navigate("/login/create")} variant="outline-secondary" className="rounded-pill">
                                Créer un compte
                            </Button>
                        </Stack>
                </Form>
            </Col>
        </Row>
    );
}

export default LoginScreen