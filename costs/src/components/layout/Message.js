import styles from './Message.module.css'

import {useState, useEffect} from 'react'

//{type = mensagem de erro ou mensagem de sucesso, msg= "Projeto concluído com sucesso"}
function Message ({type, msg}){
     
    const [visible, setVisible] = useState(false)

    useEffect(() =>{
      if(!msg){
        setVisible(false)
        return
       }

       setVisible(true)

       const timer= setTimeout (()=>{
           setVisible(false)
       }, 3000)
   
       return ()=> clearTimeout(timer)
    }, [msg])
    

    return (<>
    {visible &&(
         <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
    </>)
}

export default Message