import styles from './ProjectForm.module.css'

import Input from '../form/input'

function ProjectForm(){
return (
    <form className={styles.form}>
        <div>
             <Input 
             type="text"
             text="Nome Do Projeto"
             name="name"
             placeholder="Insira o Nome Do Projeto"
              />
        </div>
        <div>
        <Input  
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o valor do orçamento do projeto"/>
            </div>
        <div>
            <select name="category_id">
            <option >Selecione a Categoria</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Criar Projeto"/>
        </div>
    </form>
)
}

export default ProjectForm