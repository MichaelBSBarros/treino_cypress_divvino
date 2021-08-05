
export class Factory {

    static buscaFixture(nome) {
        cy.fixture(`${nome}.json`).then( json => {
            cy.wrap(json).as('wrapCadastro');
        } )
        return true
    }
}