import styles from './Design.module.css'
import {useState} from 'react'
import {v4 as uuidV4} from 'uuid';

function Input(props) {
const [tmodel,setTmodel] = useState('')//modelo da moto 
const [tclient,setTclient] = useState('')//nome do cliente começa vazio''   
const [ttype,setType] = useState('')//tipo de serviço''   

function changeC(e) {
setTclient(e.target.value)    
}
function changeM(e) {//onchange
setTmodel(e.target.value)
}
function changeT(e) {//onchange
setType(e.target.value)
}   
function addClient(e) {//click
e.preventDefault()         
if (tclient && tmodel && ttype) {
let service = {'name':tclient,'model':tmodel,'type':ttype ,'id': uuidV4(),'done':false}
props.OnaddClient(service) //transfere obj por function por em mother[]   
setTclient('')
setTmodel('') 
setType('') 
}}
    
return<> 
<form className={styles.form}>
<input onChange={changeC} name='client' type='text' placeholder='Nome do Cliente' value={tclient}/>
<input onChange={changeM} name='model' type='text' placeholder='Modelo da Motocicleta' value={tmodel}/>
<input onChange={changeT} name='TypeOfService' type='text' placeholder='Tipo de serviço' value={ttype}/>  
<input className={styles.btnSchedule} type='submit' value='Agendar' onClick={addClient} />
</form>
<hr/>
</>
}

export default Input
