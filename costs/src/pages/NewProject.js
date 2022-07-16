import ProjectForm from '../components/projects/ProjectForm'
import styles from './NewProject.module.css'

import {useHistory} from 'react-router-dom'

function NewProject( ){

    const history=useHistory()

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie Seu Projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
       </div>
    )
}

export default NewProject