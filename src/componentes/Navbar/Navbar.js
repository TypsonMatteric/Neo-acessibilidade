import React, { Component } from 'react'
import  { MenuItens } from "./MenuItens"
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
  state = {clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render(){
    return(
      <nav className="NavbarItens">
        <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          < i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>

        </div>
        <ul className={ this.state.cliked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItens.map((item, index)=>{
            return(
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