Feature: Autenticação

    Background: Acessar Divvino
        Given que esteja página home

    #Scenario: Cadastro de pessoa física por tabela de exemplos
    #    Given que possua uma massa de dados para cadastro de "pessoa_fisica"
    #    When acessar a página de cadastro
    #    And cadastrar uma "pessoa_fisica"
    #
    #Scenario: Cadastro de pessoa física por tabela de exemplos
    #    Given que possua uma massa de dados para cadastro de "pessoa_juridica"
    #    When acessar a página de cadastro
    #    And cadastrar uma "pessoa_juridica"
        
    Scenario Outline: Cadastro de pessoa física e juridica por tabela de exemplos
        Given que possua uma massa de dados para cadastro de "<tipo_pessoa>"
        When acessar a página de cadastro
        And cadastrar uma "<tipo_pessoa>"
        Examples:
            | tipo_pessoa     |
            | pessoa_fisica   |
            | pessoa_juridica |
