import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MenuItens } from "./MenuItens"
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItens">
        <Link to='/' className='navbar-logo'><img className="navbar-logo" src="/imagens/logotipo.png"/></Link>
        <div className="menu-icon" onClick={this.handleClick}>
          < i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItens.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Acessar</Button>
      </nav>
    )
  }
}

export default Navbar
