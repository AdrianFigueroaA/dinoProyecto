describe('probando crud', () => {
    it("Debe cargar la tabla de datos", () => {
        cy.visit('/LoginAdmin')
        cy.get('#usuario').type('dino@dino.com')
        cy.get('#pass').type('12345678')
        cy.get('#botonlog').click()
        cy.wait(2000);
        cy.get('#show-btn').click()
        cy.get('#nombre').type('velociraptor')
        cy.get('#habitat').type('asia')
        cy.get('#altura').type('1,5 metros')
        cy.get('#largo').type('2 metros')
        cy.get('#peso').type('200 kilos')
        cy.get('#datacion').type('100 millones de años')
        cy.get('#alimentacion').type('carnivoro')
        cy.get('#tipo').type('dromeosaurio')
        cy.get('#curiosidades').type('dinosaurio muy rapido')
        cy.get('#agregarEspecimen').click()
        cy.wait(3000);
        cy.get('#borrar').click()
        cy.wait(4000);
        


      });
  })

 