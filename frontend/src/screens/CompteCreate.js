import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Stack } from 'react-bootstrap'
import compteService from '../services/compteService'
import clientService from '../services/clientService'

function CompteCreate(){
    const [solde,setSolde] = useState()
    const [idClient,setIdC] = useState()
    const [clients,setClients] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{getClients()})
    async function getClients(){
        const {data} = await clientService.getAll()
        setClients(data.result)
      }
    async function submitCompte(element){
        element.preventDefault()
        const model = {
            "solde":solde<0 ? solde : 0,
            "idClient":idClient
        }
        await compteService.create(model)
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
                        <option Value="">Sélectionner un client</option>
                        {clients?.map(client =>(
                            <option Value={client._id}>{client.firstName} {client.lastName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Stack direction="horizontal" gap={3}>
                    <Button variant="primary" className="rounded-pill" type="submit">
                        Envoyer
                    </Button>
                    <Button onClick={() => navigate("/compte")} variant="outline-secondary" className="rounded-pill">
                        Annuler
                    </Button>
                </Stack>
            </Form>
    )
}
export default CompteCreate