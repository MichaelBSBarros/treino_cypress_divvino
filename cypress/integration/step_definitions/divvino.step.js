/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {Divvino} from '../../pages/Divvino/divvino.page'
import {Factory} from '../../fixtures/factory'

Given(`que esteja página home`, () => {
	cy.visit('/')
});

Given(`que possua uma massa de dados para cadastro de {string}`, (tipo_pessoa) => {
    // Buscar um json que contenha as informações de um cadastro de pessoa fisica
    // Validar as informações do json 
	Factory.buscaFixture(tipo_pessoa)
    cy.get("@wrapCadastro").then( json => {
        //Aqui podem ser feitas validações das informações recebidas do JSON
        //E feito uma validação de contrato
    })
});

When(`acessar a página de cadastro`, () => {
    Divvino.acessar_pagina_cadastro()
});

When(`cadastrar uma {string}`, (tipo_pessoa) => {

    switch (tipo_pessoa) {

        case 'pessoa_fisica': 
            cy.get("@wrapCadastro").then( json => {
                Divvino.cadastrar_pessoa_fisica(json)
            })
            break;

        case 'pessoa_juridica':
            cy.get("@wrapCadastro").then( json => {
                Divvino.cadastrar_pessoa_juridica(json)
            })
            break;
                 
    };
	
});

