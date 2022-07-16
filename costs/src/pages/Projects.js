import Message from "../components/layout/Message"

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
            </div>
          {message && <Message type="sucess" msg={message}/>}
        </div>
    )
}

export default Projects