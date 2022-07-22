import styles from  '../projects/ProjectForm.module.css'

import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'

import {useState} from 'react'
import Submit from '../form/SubmitButton'

function ServiceForm ({handleSubmit, btnText, projectData}){

    function submit(){

    }
    function handleChange(){

    }

 return(
    <form onSubmit={submit} className={styles.form}>
        <Input
        type="number"
        text="Custo de serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
        
        />
        <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
        
        />
        <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
        
        />
        <SubmitButton text={textBtn}/>
    </form>
 )
}

export default ServiceForm