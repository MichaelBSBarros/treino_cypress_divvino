import faker from 'faker'
import { generate as cpfFake } from 'gerador-validador-cpf'

export default class DynamicFactory {

    static criarUsuario(){
        faker.locale = 'pt_BR'
        var dataInput = faker.date.past()
        var dtNascimento = new Date(dataInput)

        return {
            "usuario": {
                "cpf"           : cpfFake(), //generate({format:true})
                "dtNascimento"  : dtNascimento.toLocaleDateString('pt-Br', {timeZone: 'UTC'}),
                "nick"          : faker.name.middleName(),
                "nome"          : `${faker.name.firstName()} ${faker.name.lastName()}`,
                "email"         : faker.internet.email(),
                "senha"         : faker.internet.password(),
                "sexo"          : faker.name.gender(),
                "celular"       : faker.phone.phoneNumber()
            } 
        }
    }
}



