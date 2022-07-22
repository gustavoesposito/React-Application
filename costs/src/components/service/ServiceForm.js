import styles from  '../projects/ProjectForm.module.css'

import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'

import {useState} from 'react'

function ServiceForm (){

    function submit(){

    }
    function handleChange(){
        
    }

 return(
    <form onSubmit={submit} className={styles.form}>
        <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
        
        />
    </form>
 )
}

export default ServiceForm