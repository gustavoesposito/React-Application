import styles from './Message.module.css'

//{type = mensagem de erro ou mensagem de sucesso, msg= "Projeto concluído com sucesso"}
function Message ({type, msg}){
    return (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )
}

export default Message