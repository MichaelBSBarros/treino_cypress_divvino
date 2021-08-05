/// <reference types="cypress" />

import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {Sauce} from '../../pages/SauceDemo/sauce.page'

Before(() => {
  console.log("before all")
})

Before({ tags: "@tag"}, () => {
  console.log("before scenarios with tag '@tag'")
})

Given(`que esteja na página home`, () => {
  Sauce.acessar_sauce_demo()
});

Given(`que esteja logado com {string}`, (user_type) => {
	Sauce.logar_sauce_demo(user_type)
});

When(`filtrar os produtos por {string}`, (filtro) => {
  Sauce.filtrar_produtos(filtro)
});

Then(`deverá ser mostrado o primeiro produto com nome {string} e preço {string}`, (product_name, product_price) => {
  Sauce.verificar_produto(product_name, product_price)
});
