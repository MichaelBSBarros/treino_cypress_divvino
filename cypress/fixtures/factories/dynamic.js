import faker from 'faker'
import { generate as cpfFake } from 'gerador-validador-cpf'
import { generate as cnpjFake } from 'cnpj';

export default class DynamicFactory {

    static criarUsuario(){

        faker.locale = 'pt_BR'

        var dataInput = faker.date.between('1980-01-01', '2003-08-05');
        var dtNascimento = new Date(dataInput)

        var generos = ['Masculino', 'Feminino']
       
        return {
            "usuario": {
                "cpf"           : cpfFake(), //generate({format:true})
                "dtNascimento"  : dtNascimento.toLocaleDateString('pt-Br', {timeZone: 'UTC'}),
                "nick"          : faker.name.firstName(),
                "nome"          : faker.name.lastName(),
                "email"         : faker.internet.email(),
                "senha"         : faker.internet.password(),
                "sexo"          : faker.random.arrayElement(generos),
                "celular"       : faker.phone.phoneNumber('8199#######')
            } 
        }
    }

    static criarUsuarioPJ(){

        faker.locale = 'pt_BR'
        var ie_num = [
            '448672634', '684328011', '005290791', '456776206', '303815175', '196173302',
            '713650524', '287750400', '028406265', '173905595', '739444832', '839629214'
        ]        

        return {
            "usuario": {
                "cnpj"          : cnpjFake(),
                "nomeContato"   : `${faker.name.firstName()} ${faker.name.lastName()}`,
                "razaoSocial"   : faker.company.companyName(),
                //"ie_num"        : faker.datatype.number({'min': 111111111, 'max': 999999999}),
                "ie_num"        : faker.random.arrayElement(ie_num),
                "email"         : faker.internet.email(),
                "senha"         : faker.internet.password(),
                "celular"       : faker.phone.phoneNumber('8199#######')
            } 
        }
    }
}



