import Message from "../components/layout/Message"
import Container from "../components/layout/Container"
import LinkButton from "../components/layout/LinkButton"

import {useLocation} from 'react-router-dom'

import styles from './Projects.module.css'

function Projects(){

    const location =useLocation()
    let message ='';
    if(location.state){
        message= location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton  className={styles.btn} to="/newproject" text="Criar Projeto"/>
             </div>
             
          {message && <Message type="sucess" msg={message}/>}
          <Container customClass="start">
          <p>  Projetos....</p>
          </Container>
          </div>
    )
}

export default Projects