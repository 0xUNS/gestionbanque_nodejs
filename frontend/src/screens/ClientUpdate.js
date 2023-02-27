import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Stack  } from 'react-bootstrap'
import clientService from '../services/clientService'


function ClientUpdate(){
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [address,setAddress] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        getClientById()
    },[])
    
    async function getClientById(){
        const {data} = await clientService.getById(id)
        setFirstName(data.result.firstName)
        setLastName(data.result.lastName)
        setAddress(data.result.address)
    }

    async function submitClient(element){
        element.preventDefault()
        const model = {
            "firstName":firstName,
            "lastName":lastName,
            "address":address
        }
        await clientService.update(id, model)
        navigate("/client")
    }

    return(
        <Form onSubmit={(element)=>submitClient(element)}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Prenom</Form.Label>
                <Form.Control type="text" value={firstName} onChange={(element)=>setFirstName(element.target.value)} placeholder="Entrer le prenom" required/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" value={lastName} onChange={(element)=>setLastName(element.target.value)} placeholder="Entrer le nom" required/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" value={address} onChange={(element)=>setAddress(element.target.value)} placeholder="Entrer une adresse valide" required/>
                <Form.Text className="text-muted">
                Entrer l'adresse complète contenant le nom de la ville et le code postal
                </Form.Text>
            </Form.Group>
            <Stack direction="horizontal" gap={3}>
                <Button variant="primary" className="rounded-pill" type="submit">
                    Envoyer
                </Button>
                <Button onClick={()=>navigate("/client")} variant="outline-secondary" className="rounded-pill">
                    Annuler
                </Button>
            </Stack>
        </Form>
    )
}
export default ClientUpdate