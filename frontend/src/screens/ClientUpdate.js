import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button  } from 'react-bootstrap'
import clientService from '../services/clientService'


function ClientUpdate(){
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{getClientById()})
    
    async function getClientById(){
        const {data} = await clientService.getById(id)
        const {result} = data
        setFirstName(result.firstName)
        setLastName(result.lastName)
        setAddress(result.address)
    }

    async function submitClient(element){
        element.preventDefault()
        const model = {
            "_id":id,
            "firstName":firstName,
            "lastName":lastName,
            "address":address
        }
        await clientService.update(model)
        navigate("/client")
    }


    return(
        <Form onSubmit={(element)=>submitClient(element)}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={firstName} onChange={(element)=>setFirstName(element.target.value)} placeholder="Entrer le prenom" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={lastName} onChange={(element)=>setLastName(element.target.value)} placeholder="Entrer le nom" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control type="text" value={address} onChange={(element)=>setAddress(element.target.value)} placeholder="Entrer un adresse valide" />
                    <Form.Text className="text-muted">
                    Entrer l'adresse complète contenant le nom de la ville et le code postal
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" className="rounded-pill" type="submit">
                    Submit
                </Button>
            </Form>
    )
}
export default ClientUpdate