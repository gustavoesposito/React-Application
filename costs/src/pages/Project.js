import styles from'./Project.module.css'

import{useParams} from 'react-router-dom'//hook para resgatar o id  que vem pela URL, ele serve para pegar os parâmetros
import {useState,useEffect} from 'react'//controle de estados, e resgatando apenas uma vez

import {parse, v4 as uuidv4} from 'uuid'

import Loading from '../components/layout/Loading'
import Container from '../components/layout/Container'
import ProjectForm from '../components/projects/ProjectForm'
import Message from '../components/layout/Message'
import ServiceForm from '../components/service/ServiceForm'

function Project(){
const {id} = useParams()

const {project,setProject}= useState([])
const {services,setServices}= useState([])
const {showProjectForm, setShowProjectForm} = useState(false)
const {showServiceForm, setShowServiceForm} = useState(false)
const [message, setMessage] = useState()
const [type, setType] = useState()
  
useEffect(() => {
setTimeout(() => {
    fetch (`http://localhost:5000/projects / ${id}`,{

method:'GET',
headers:
{
    'Content-Type': 'application/json',
},

})//request,rota
.then(resp => resp.json())
.then((data) => {
    setProject(data)
    setServices(data.services)
})
.catch(err => console.log(err))
},5000)
}, [id])//parâmetro importantíssimo que é nossa referência

function editPost(project){
    setMessage('')
    //budget validation
    if(project.budget<project.cost){
    setMessage('O orçamento não pode ser menor que o custo do projeto!')
    setType('error')
    return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`,{
        method:' PATCH',
       headers:{
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(project),
    })
    .then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('sucess')
        })
    .catch(err =>  console.log(err))
 }

 function creativeService(project){
    setMessage('')

    const lastService = project.services[project.services.length-1]
       
    lastService.id = uuidv4

    const lastServiceCost = lastService.cost

    const newCost = parseFloat (project.cost) + parseFloat(lastServiceCost)

     if (newCost > parseFloat(project.budget)){
        setMessage ("Orçamento ultrapassado , verifique o valor do serviço ")
        setType('error')
        project.services.pop()
        return false
     }
      //add service cost to prokject total cost
     project.cost = newCost
     // update project
     fetch(`http://localhost:5000/projects/${project.id}`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
     })
     .then((resp) => resp.json()) 
     .then((data) => {
        //exibir serviço
        console.data(data)
     })
     .catch(err => console.log(err))
 }

function toggleProjectForm(){
    setShowProjectForm(!showProjectForm)
}
function toggleServiceForm(){
    setShowServiceForm(!showServiceForm)
}

return (
<>
{project.name? (
    <div className={styles.project_details}>
        <Container customClass="column">
            {message && <Message type={type} msg={message}/>}
          <div className={styles.details_container}>
            <h1>Projeto:{project.name}</h1>
            <button  
            className={styles.btn}
            onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar Projetos' : 'Fechar'}
            </button>
             {!showProjectForm ? (
                <div className={styles.project_info}>
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
               <div className={styles.project_info}>
                <ProjectForm 
                handleSubmit={editPost} btnText="Concluir Edição" projectData={project}/>
               </div>
             )}
          </div>
          <div className={styles.service_form_container}>
         <h2>Adicione um serviço</h2>
         <button  
            className={styles.btn}
            onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
            </button> 
            <div className={styles.project_info}>
                {showServiceForm &&   <ServiceForm
                handleSubmit={creativeService}
                btnText="Adicionar Serviço"
                projectData={project}
                />}
                    
                
                    
            </div>
           </div>
           <h2>Serviços</h2>
           <Container customClass="start">
            {services.length > 0 
                 
            }
            {services.length === 0 && <p>Não há serviços cadatrados</p>}
            </Container>
        </Container>
    </div>
   ) : (<Loading/>
    )}
    </>

)
}

export default Project