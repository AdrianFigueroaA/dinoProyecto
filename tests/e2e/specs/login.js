// https://docs.cypress.io/api/introduction/api.html

describe('probando dinologin', () => {
  it('Visita la vista de Login', () => {
    cy.visit('/LoginAdmin')
    cy.get('#usuario').type('dino@dino.com')
    cy.get('#pass').type('12345678')
    cy.get('#botonlog').click()
    cy.wait(4000);
    cy.get('#botonlogout').click()
    cy.wait(3000);
    
  })
})
