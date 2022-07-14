import styles from './ProjectForm.module.css'

import Input from '../form/input'
import Select from '../form/Select'

function ProjectForm(){
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
            
            />
       
         
    </form>
)
}

export default ProjectForm