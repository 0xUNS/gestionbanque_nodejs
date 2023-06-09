import React, { useState, useEffect } from 'react';
import { Row, Col, Table, ButtonGroup, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import clientService from '../services/clientService'
import Search from '../components/Search'

function ClientScreen() {
    const [clients, setClients]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{getClients()},[])
    
    async function getClients(){
      const {data} = await clientService.getAll()
      setClients(data.result)
    }
    async function deleteClients(id){
      await clientService.deleteById(id)
      getClients();
    }
    
    return (
        <div className="container">
            <Col md={6}>
                <h2>Liste des clients</h2>
                <Stack direction="horizontal" gap={5}>
                    <Search />
                    <div className="vr" />
                    <Button onClick={() => navigate(`/client/create`)} variant="primary" className="rounded-pill">
                      <i class="fa-solid fa-user-plus"></i> Ajouter
                    </Button>
                </Stack>
            </Col>
            <Row className="py-4">
                  <Table>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                {clients?.map((client, index) =>(
                      <tr key={client._id}>
                        <th scope="row">{index+1}</th>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td>{client.address}</td>
                        <td>
                        <ButtonGroup >
                          <Button onClick={() => navigate(`/client/edit/${client._id}`)} className="rounded-pill-btn" variant="warning">
                            <i class="fa-solid fa-pen-to-square"></i> Modifier
                          </Button>
                          <Button onClick={()=>deleteClients(client._id)} className="rounded-pill-btn" variant="outline-danger">
                            <i class="fa-solid fa-trash"></i> Supprimer
                          </Button>
                        </ButtonGroup>
                        </td>
                      </tr>
                  ))}
                      </tbody>
                </Table>
            </Row>
        </div>
    )
}

export default ClientScreen
