import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-5">
                        2023 &copy; 0xUns
                        &emsp; | &emsp;
                        <a href="https://gitlab.com/0xUns/gestionbanque_nodejs"><i class="fa-brands fa-gitlab"></i> Gitlab </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer