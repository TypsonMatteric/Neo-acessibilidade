import { useState } from "react";
import React from "react";
import logotipo from './imagens/logotipo.png';
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import "./Header.css"
//Componente navbar do Bootstrap no Header da página
class Header extends React.Component{
    render(){
        return(
            //parâmetros do componente Navbar (tema dark)
                <>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Início</Nav.Link>
                                <Nav.Link href="/contato">Contate-nos</Nav.Link>
                                <NavDropdown title="Projetos" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/Projetos">Todos os projetos</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Acessibilidade</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Oportunidades</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Submeter Projeto</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/contato">Equipe</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div class="headerimg"><img  src={logotipo} width='7%' /></div><br />
                
                </>
        )
    }
}

export default Header;