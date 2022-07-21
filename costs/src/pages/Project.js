import styles from'./Project.module.css'

import{useParams} from 'react-router-dom'//hook para resgatar o id  que vem pela URL, ele serve para pegar os parâmetros
import {useState,useEffect} from 'react'//controle de estados, e resgatando apenas uma vez
import Loading from '../components/layout/Loading'

function Project(){
const {id} =useParams()

const {project,setProject}= useState([])
  
useEffect(() => {
setTimeout(() => {
    
})
 
}, [id])//parâmetro importantíssimo que é nossa referência

return(
    <>
    {project.name? (
          <p>{project.name}</p>
    ):(
        <Loading/>
    )}
    </>

)
}

export default Project