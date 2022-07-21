import styles from'./Project.module.css'

import{useParams} from 'react-router-dom'//hook para resgatar o id  que vem pela URL, ele serve para pegar os parâmetros
import {useState,useEffect} from 'react'//controle de estados, e resgatando apenas uma vez
import Loading from '../components/layout/Loading'
import Container from '../components/layout/Container'

function Project(){
const {id} =useParams()

const {project,setProject}= useState([])
const {showProjectForm, setShowProjectForm} = useState(false)
  
useEffect(() => {
setTimeout(() => {
    fetch (`http://localhost:5000/projects  / ${id}`,{

method:'GET',
headers:
{
    'Content-Type': 'application/json',
},

})//request,rota
.then(resp => resp.json())
.then((data) => {
    setProject(data)
})
.catch(err => console.log(err))
},5000)
 
}, [id])//parâmetro importantíssimo que é nossa referência

function toggleProjectForm(){
    setShowProjectForm(!showProjectForm)
}

return (
<>
{project.name? (
    <div className={styles.project_details}>
        <Container customClass="column">
          <div className={styles.details_container}>
            <h1>Projeto:{project.name}</h1>
            <button 
            onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar Projetos' : 'Fechar'}
            </button>
             {!showProjectForm ? (
                <div>
                    <p>
                        <span>Categoria:</span> {project.category.name}
                    </p>
                    <p>
                        <span>Total de orçamento:</span> R${project.budget}
                    </p>
                    <p>
                        <span>Total utilizado:</span> R${project.cost}
                    </p>
                </div>
             ) : (
                <p>Detalhes do projeto</p>
             )}
          </div>
        </Container>
    </div>
   ) : (<Loading/>
    )}
    </>

)
}

export default Project