class Service {
static idGenerator = 0 //var

constructor(name,model){//(name,model,typeOfService){//obj c/ 5 propiedades
this.name = name ; //nome do cliente
this.model = model ;//modelo da motocicleta
//this.typeOfService = typeOfService ;//tipo de serviço a ser feito
this.id = Service.idGenerator++ ;//gerador de id
this.done = false ;//serviço feito/nao feito
}

}
//ex: new client(andre)
export default Service
