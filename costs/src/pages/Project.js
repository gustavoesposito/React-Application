import styles from'./Project.module.css'

import{useParams} from 'react-router-dom'//hook para resgatar o id  que vem pela URL, ele serve para pegar os parâmetros
import {useState,useEffect} from 'react'//controle de estados, e resgatando apenas uma vez

function Project(){
const {id} =useParams()

const {project,setProject}= useState([])
  
useEffect(() => {

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
}, [id])//parâmetro importantíssimo que é nossa referência

return     <p>{ project.name}</p>
}

export default Project