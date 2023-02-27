import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Stack, Row, Col, Alert } from 'react-bootstrap'
import loginService from '../services/authService'

function LoginCreate(){
    const [email,setEmail] = useState()
    const [userName,setUserName] = useState()
    const [password,setPassword] = useState()
    const [passwordConfirm,setPasswordConfirm] = useState()
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()

    async function submitLogin(element){
        element.preventDefault()
        try{
            if (!password.match(passwordConfirm)){
                setError(true);
                setErrorMessage('Confirmer le mot de passe');
            }else if (password.match("^(?=.*[a-z])(?=.{4,30})")){
                const model = {
                    "email": email,
                    "userName": userName,
                    "password": password,
                }
                await loginService.create(model)
                navigate('/login')
            }
        } catch (exception) {
            setError(true);
            setErrorMessage('Impossible de créer un nouveau compte');
        }
    }


    return(
        <Row className="justify-content-center">
            <Col md={6}>
                {error && <Alert variant="danger">{errorMessage}</Alert>}
                <h3>Créer un compte</h3>
                <Form onSubmit={(element)=>submitLogin(element)}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" value={email} onChange={(element)=>setEmail(element.target.value)} placeholder="Entrer un email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Nom d'utilisateur</Form.Label>
                        <Form.Control type="text" value={userName} onChange={(element)=>setUserName(element.target.value)} placeholder="Entrer nom d'utilisateur" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" value={password} onChange={(element)=>setPassword(element.target.value)} placeholder="Entrer un mot de passe" required/>
                        <Form.Text className="text-muted">
                        Un mot de passe doit contenir: Au moins 8 caractère entre minuscules, majuscules et chiffres
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirmer le mot de passe</Form.Label>
                        <Form.Control type="password" value={passwordConfirm} onChange={(element)=>setPasswordConfirm(element.target.value)} placeholder="Confirmer le mot de passe" required/>
                    </Form.Group>
                    <Form.Check type="checkbox" label="J'accepte les conditions d'utilisation" className="m-3"/>

                    <Stack direction="horizontal" gap={3} className="m-3">
                        <Button variant="primary" className="rounded-pill" type="submit">
                            Créer un compte
                        </Button>
                        <Button onClick={() => navigate("/login")} variant="outline-secondary" className="rounded-pill">
                            Se connecter
                        </Button>
                    </Stack>
                </Form>
             </Col>
        </Row>
    )
}
export default LoginCreate