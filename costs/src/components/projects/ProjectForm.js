import styles from './ProjectForm.module.css'

import{useEffect, useState} from 'react'

import Input from '../form/input'
import Select from '../form/Select'
import Submit from '../form/SubmitButton'

function ProjectForm({handleSubmit,projectData, btnText}){
    const [categories, setCategories] =useState([])
    const [project, setProject] =useState(projectData || {})
useEffect(()=>{
    fetch('http://localhost:5000/categories',{
        method:'GET',
        headers:{
            'Content-Type': 'applicatio/json',
        },
    })
    .then((resp)=> resp.json() )
    .then((data) => {
        setCategories(data)
    })
    .catch((err)=> console.log(err))
},[])
    
const submit = (e) => {
    e.preventDefault()
    //handleSubmit(project)
    console.log(project)
}
 function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value})
   }
 function handleCategory(e){
    setProject({
        ...project,
        category: {
            id:e.target.value,
            name:e.target.options[e.target.selectedIndex].text,
        },
      })
  }
return (
     <form onSubmit={submit} className={styles.form}>
        
             <Input 
             handleOnChange={handleChange}
               type="text"
             text="Nome Do Projeto"
             name="name"
             placeholder="Insira o Nome Do Projeto"
             value={project.name}

              />
        
        <Input  
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o valor do orçamento do projeto"
        handleOnChange={handleChange}
         value={project.budget}
        />
            
      
            <Select
            name="category_id"
            text="Selecione uma Categoria" 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
       
         <Submit text={btnText}/>
    </form>
)
}

export default ProjectForm