import styles from './Design.module.css'
import{AiFillCheckCircle} from 'react-icons/ai'
import{CiCircleCheck} from 'react-icons/ci' 
import{BsFillTrashFill} from 'react-icons/bs'

function List(props) {//recebe props.Mother de comp pai

return <div className={styles.divUl}>
<ul>    
{props.Mother.map( service=> 
<li key={service.id}>
<p><b>Cliente:</b> {service.name}</p>
<p><b>Modelo da moto:</b> {service.model}</p>
<p className={service.done ?styles.done:''}><b>Tipo de serviço:</b> {service.type}</p>

<button className={`${styles.btnDoneRemove} ${service.done ? styles.fillCheck:''}`} type='submit' onClick={ () => props.doneService(service)}>
{service.done?<AiFillCheckCircle />:<CiCircleCheck/>}
</button>
<button className={styles.btnDoneRemove}  type='submit' onClick={ () => props.removeService(service)}><BsFillTrashFill/></button>
</li>)}
</ul>  
</div>
}

export default List