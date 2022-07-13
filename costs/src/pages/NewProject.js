import ProjectForm from '../components/projects/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie Seu Projeto para depois adicionar os serviços</p>
            <ProjectForm/>
       </div>
    )
}

export default NewProject