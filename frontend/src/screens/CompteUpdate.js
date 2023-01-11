import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Stack } from 'react-bootstrap'
import compteService from '../services/compteService'
import clientService from '../services/clientService'

function CompteUpdate(){
    const [solde,setSolde] = useState()
    const [idClient,setIdC] = useState()
    const [clients,setClients] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{getCompteById()},[])
    useEffect(()=>{getClients()})
    
    async function getCompteById(){
        const {data} = await compteService.getById(id)
        setSolde(data.result.solde)
        setIdC(data.result.idClient)
    }
    async function getClients(){
        const {data} = await clientService.getAll()
        setClients(data.result)
    }
    async function submitCompte(element){
        element.preventDefault()
        const model = {
            "solde":solde,
            "idClient":idClient
        }
        await compteService.update(id, model)
        navigate("/compte")
    }


    return(
    <Form onSubmit={(element)=>submitCompte(element)}>
        <Form.Group className="mb-3" controlId="solde">
            <Form.Label>Solde</Form.Label>
            <Form.Control type="number" min="0" Value={solde} onChange={(element)=>setSolde(element.target.value)} placeholder="Entrer le solde" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="idClient">
            <Form.Label>Client</Form.Label>
            <Form.Select Value={idClient} onChange={(element)=>setIdC(element.target.value)} required>
                {clients?.map(client =>(
                    ( idClient === client._id )
                    ? <option selected Value={client._id}>{client.firstName} {client.lastName}</option>
                    : <option Value={client._id}>{client.firstName} {client.lastName}</option>
                ))}
            </Form.Select>
        </Form.Group>
        <Stack direction="horizontal" gap={3}>
            <Button variant="primary" className="rounded-pill" type="submit">
                Envoyer
            </Button>
            <Button onClick={()=>navigate("/compte")} variant="outline-secondary" className="rounded-pill">
                Annuler
            </Button>
        </Stack>
    </Form>
    )
}
export default CompteUpdate