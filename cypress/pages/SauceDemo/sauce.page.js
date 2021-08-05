import Base from '../_base.page'
import {Login as log, Home} from '../components/sauce.elements'

export class Sauce extends Base {

    static acessar_sauce_demo(){
      cy.visit('/')
    }

    static logar_sauce_demo(user_type){
      super.typeValue(log.INP_USER, user_type)
      super.typeValue(log.INP_PASSWORD, 'secret_sauce')
      super.clickOnElement(log.BTN_LOGIN)
    }

    static filtrar_produtos(filtro){
      super.waitElementAndSelectOption(Home.SELECT_FILTER, filtro)
    }

    static verificar_produto(name, price){
      super.validarPrimeiroElementoDoArray(Home.ARR_PRODUCTS, name)
      super.validarPrimeiroElementoDoArray(Home.ARR_PRODUCTS, price)
    }

}
