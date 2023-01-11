import { InputGroup, Form, Button } from "react-bootstrap"

function Search() {
    return(
        <InputGroup>
            <Form.Control
            type="search"
            placeholder="Recherche"
            className="rounded-pill-left text-center"
            />
            <Button variant="primary" className="rounded-pill-right">
            <i class="fa-solid fa-magnifying-glass"></i>
            </Button>
        </InputGroup>
    )
}

export default Search