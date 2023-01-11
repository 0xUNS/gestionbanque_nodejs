import React, { useState, useEffect } from 'react';
import { Row, Col, Table, ButtonGroup, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import compteService from '../services/compteService'
import Search from '../components/Search'


function CompteScreen() {
    const [comptes, setComptes]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{getComptes()},[])
    
    async function getComptes(){
      const {data} = await compteService.getAll()
      setComptes(data.result)
    }
    async function deleteComptes(id){
      await compteService.deleteById(id)
      getComptes();
    }
    
    return (
        <div className="container">
            <Col md={6}>
                <h2>Liste des comptes</h2>
                <Stack direction="horizontal" gap={5}>
                    <Search />
                    <div className="vr" />
                    <Button onClick={() => navigate(`/compte/create`)} variant="primary" className="rounded-pill">
                      <i class="fa-solid fa-user-plus"></i> Ajouter
                    </Button>
                </Stack>
            </Col>
            <Row className="py-4">
                  <Table>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Solde</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                {comptes?.map((compte, index) =>(
                      <tr key={compte._id}>
                        <th scope="row">{index+1}</th>
                        <td>{compte.solde}</td>
                        <td>{compte.idClient?.firstName} {compte.idClient?.lastName}</td>
                        <td>
                        <ButtonGroup >
                          <Button onClick={() => navigate(`/compte/edit/${compte._id}`)} className="rounded-pill-btn" variant="warning">
                            <i class="fa-solid fa-pen-to-square"></i> Modifier
                          </Button>
                          <Button onClick={()=>deleteComptes(compte._id)} className="rounded-pill-btn" variant="outline-danger">
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

export default CompteScreen
