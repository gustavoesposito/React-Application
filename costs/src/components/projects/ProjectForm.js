import styles from './ProjectForm.module.css'

import{useEffect, useState} from 'react'

import Input from '../form/input'
import Select from '../form/Select'
import Submit from '../form/SubmitButton'

function ProjectForm({btnText}){
    const [categories, setCategories] =useState([])
useEffect(()=>{
    fetch('http://localhost:5000/categories',{
        method:'GET',
        headers:{
            'Content-Type': 'applicatio/json',
        },
    })
    .then((res)=> resp.json() )
}
    

return (
     <form className={styles.form}>
        
             <Input 
             type="text"
             text="Nome Do Projeto"
             name="name"
             placeholder="Insira o Nome Do Projeto"
              />
        
        <Input  
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o valor do orçamento do projeto"/>
            
      
            <Select
            name="category_id"
            text="Selecione uma Categoria" 
            options={categories}
            />
       
         <Submit text={btnText}/>
    </form>
)
}

export default ProjectForm