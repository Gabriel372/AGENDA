import  styles from './Design.module.css'
import Input from './Input'
import List from './List'
import {useState} from 'react'
import {AiOutlineSchedule} from 'react-icons/ai'

//PAI DOS COMPONENTES
function Schedule() {
const [Mother,setMother] = useState([])//mae do objeto 
   
function OnaddClient(service) {
setMother([...Mother,service])   
}

function removeService(serviceClick) {//serviceClick e o que sera removido
let filtered = Mother.filter( service => serviceClick !== service )
setMother(filtered)
}
function doneService(serviceD) {//serviceD é o clicado
let doneMap = Mother.map( service => {//mapeia cada service de mother
if(service.id === serviceD.id){// se serviceD for igual ao service armazenado..
serviceD.done = !serviceD.done;//inverte o done = true=false
}
return service //retorna o service.done pra mother
})
setMother(doneMap)  
}

return<div className={styles.container}>
<h2>Agenda de serviços <AiOutlineSchedule className={styles.iconSchedule}/></h2>
<Input OnaddClient={OnaddClient} />
<List Mother={Mother} removeService={removeService} doneService={doneService} />
</div>
}

export default Schedule