import ProjectForm from '../components/projects/ProjectForm'
import styles from './NewProject.module.css'

import {useNavigate} from 'react-router-dom'

function NewProject( ){

    const navigate = useNavigate()

    function createPost(project){
   //initialize cost and services
     project.cost=0
     project.services= []
  

    fetch("http:/localhost::5000/projects",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
    }).then(resp => resp.json())
    .catch(err=> console.log(err))
}

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie Seu Projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
       </div>
    )
}

export default NewProject