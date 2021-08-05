Feature: Filters

    Background: Iniciar na página de exemplo
      Given que esteja na página home
      And que esteja logado com "standard_user"

    @filter-scenario
    Scenario Outline: Filtrar produtos na home
      When filtrar os produtos por "<filtro>"
      Then deverá ser mostrado o primeiro produto com nome "<nome>" e preço "<preço>"
      Examples:
        | filtro              | value | nome                              | preço  |
        | Price (high to low) | hilo  | Sauce Labs Fleece Jacket          | $49.99 |
        | Price (low to high) | lohi  | Sauce Labs Onesie                 | $7.99  |
        | Name (A to Z)       | az    | Sauce Labs Backpack               | $29.99 |
        | Name (Z to A)       | za    | Test.allTheThings() T-Shirt (Red) | $15.99 |


