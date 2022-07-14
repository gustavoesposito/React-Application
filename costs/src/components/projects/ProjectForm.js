import styles from './ProjectForm.module.css'

import Input from '../form/input'

function ProjectForm(){
return (
    <form className={styles.form}>
        <div>
             <Input/>
        </div>
        <div>
        <Input/>
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