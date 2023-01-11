import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Stack } from 'react-bootstrap'
import clientService from '../services/clientService'

function ClientCreate(){
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()

    async function submitClient(element){
        element.preventDefault()
        const model = {
            "firstName":firstName,
            "lastName":lastName,
            "address":address
        }
        await clientService.create(model)
        navigate("/client")
    }

    return(
            <Form onSubmit={(element)=>submitClient(element)}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control type="text" Value={firstName} onChange={(element)=>setFirstName(element.target.value)} placeholder="Entrer le prenom" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" Value={lastName} onChange={(element)=>setLastName(element.target.value)} placeholder="Entrer le nom" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control type="text" Value={address} onChange={(element)=>setAddress(element.target.value)} placeholder="Entrer une adresse valide" required/>
                    <Form.Text className="text-muted">
                    Entrer l'adresse complète contenant le nom de la ville et le code postal
                    </Form.Text>
                </Form.Group>
                <Stack direction="horizontal" gap={3}>
                    <Button variant="primary" className="rounded-pill" type="submit">
                        Envoyer
                    </Button>
                    <Button onClick={() => navigate("/client")} variant="outline-secondary" className="rounded-pill">
                        Annuler
                    </Button>
                </Stack>
            </Form>
    )
}
export default ClientCreate