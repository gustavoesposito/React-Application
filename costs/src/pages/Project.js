import styles from'./Project.module.css'

import{useParams} from 'react-router-dom'//hook para resgatar o id  que vem pela URL, ele serve para pegar os parâmetros
import {useState,useEffect} from 'react'//controle de estados, e resgatando apenas uma vez

function Project(){
const {id} =useParams()

const {project,setProject}= useState([])
  

return     <p>Projeto</p>
}

export default Project