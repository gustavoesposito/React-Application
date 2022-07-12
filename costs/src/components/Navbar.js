import { Link } from "react-router-dom"

import Container from "./layout/Container"

import styles from './Navbar.module.css'
import logo from '../img/costs_logo.png'

function Navbar(){
    return(
        <nav>
          <Container>
            <Link to="/">
              <img src={logo} alt = "Costs Logo"/>
            </Link>
            <ul >
            <li >
              <Link to='/'>Home</Link>
            </li>
            <li >
              <Link to='/empresa'>Sobre</Link>
            </li>
            <li>
              <Link to='/contato'>Contato</Link>
            </li>
            <li >
              <Link to='/newproject'>Novo Projeto</Link>
            </li>
                  </ul>
          </Container>
        </nav>
    )
}

export default Navbar