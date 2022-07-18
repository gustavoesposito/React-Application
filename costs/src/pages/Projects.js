import Message from "../components/layout/Message"
import Container from "../components/layout/Container"
import {useLocation} from 'react-router-dom'

import styles from './Projects.module.css'

function Projects(){

    const location =useLocation()
    let message ='';
    if(location.state){
        message= location.state.message
    }

    return (
        <div>
            <div>
                <h1>Meus Projetos</h1>
                <a href ="#">Novo Projeto</a>
            </div>
          {message && <Message type="sucess" msg={message}/>}
          <Container customClass="start">
          <p>Meus Projetos</p>
          </Container>
          </div>
    )
}

export default Projects