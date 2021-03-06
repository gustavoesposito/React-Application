import styles from './Home.module.css'
import savings from '../img/economia.svg'
import LinkButton from '../components/layout/LinkButton'

function Home(){
    return(
       <section className={styles.home_container}>
        <h1>Bem-Vindo ao <span>Costs</span></h1>
        <p>Comece agora mesmo a gerenciar seus projetos</p>
       <LinkButton to="/newproject" text="Criar Projeto"/>
        <img src={savings} alt="Costs"></img>
       </section>
    )
}

export default Home