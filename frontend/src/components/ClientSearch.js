import { InputGroup, Form, Button } from "react-bootstrap"

function ClientSearch() {
    return(
        <InputGroup>
            <Form.Control
            placeholder="Recherche des clients"
            />
            <Button variant="primary">
            <i class="fa-solid fa-magnifying-glass"></i>
            </Button>
        </InputGroup>
    )
}

export default ClientSearch
// 0B4FB4 <=> 2c4866