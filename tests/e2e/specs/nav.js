
describe('probando nav', () => {
    it('Visita vista de inicio', () => {
      cy.visit('/') 
      cy.wait(1000);
      cy.get('#especies').click()
      cy.wait(3000);
      cy.get('#articulos').click()
      cy.wait(3000);
      cy.get('#preguntas').click()
      cy.wait(1000);
      cy.get('#about').click()
      cy.wait(1000);
      cy.get('#inicio').click()
    })
  })