import Base from '../_base.page'
import {Home as el, Cadastro as cd} from '../components/divvino.elements'

export class Divvino extends Base {
    
    static acessar_pagina_cadastro(){
        super.clickOnElement(el.BTN_CADATRAR)
    }

    static cadastrar_pessoa_fisica(infos){
        infos = infos.usuario
        super.clickOnElement(cd.BTN_PF)
        super.typeValue(cd.INP_CPF, infos.cpf)
        super.typeValue(cd.INP_DT_NASC, infos.dtNascimento)
        super.typeValue(cd.INP_NICK, infos.nick)
        super.typeValue(cd.INP_NOME, infos.nome)
        super.typeValue(cd.INP_EMAIL, infos.email)
        super.typeValue(cd.INP_CONF_EMAIL, infos.email)
        super.typeValue(cd.INP_SENHA, infos.senha)
        super.typeValue(cd.INP_CONF_SENHA, infos.senha)

        switch (infos.sexo) {

            case 'Masculino': 
                cy.get(cd.CHK_MALE).check({ force : true });
                break;

            case 'Feminino':
                cy.get(cd.CHK_FEM).check({ force : true });
                break;
         
        };

        super.typeValue(cd.INP_CELULAR, infos.celular)
        
        //super.clickOnElement(cd.BTN_SALVAR)
        return true
    }

    static cadastrar_pessoa_juridica(infos){

        super.clickOnElement(cd.BTN_CADASTRO_PJ)

        infos = infos.usuario
        super.typeValue(cd.INP_CNPJ, infos.cnpj)
        super.typeValue(cd.INP_NOME_CONTATO, infos.nomeContato)
        super.typeValue(cd.INP_RAZAO, infos.razaoSocial)

        if (infos.ie != "Isento"){
            super.typeValue(cd.INP_IE, infos.ie)
        }else{
            cy.get(cd.CHK_IE).check({ force : true });
        }

        super.typeValue(cd.INP_EMAIL, infos.email)
        super.typeValue(cd.INP_CONF_EMAIL, infos.email)
        super.typeValue(cd.INP_SENHA, infos.senha)
        super.typeValue(cd.INP_CONF_SENHA, infos.senha)
        super.typeValue(cd.INP_CELULAR, infos.celular)


        //super.clickOnElement(cd.BTN_SALVAR)
        return true
    };

}