/* /// <reference types="cypress" />

describe('', () => {
    const userName = 'userName' + Math.floor(Math.random() * 10000);
    const userEmail = 'userEmail' + Math.floor(Math.random() * 10000) + '@gmail.com';


    before ('', () => {
        cy.visit('http://localhost:1667/#/');
     });

     it('', () => {
         cy.get(':nth-child(3) > .nav-link').click();
         cy.get(':nth-child(1) > .form-control').type(userName);
         cy.get(':nth-child(2) > .form-control').type(userEmail);
         cy.get(':nth-child(3) > .form-control').type('12345Q12werty')
         cy.get('.btn').click();

         cy.get('.swal-modal').should('contain', 'Your registration was successful!');

         cy.get('.swal-button').click();
         cy.get(':nth-child(4) > .nav-link').should('contain', userName);
     });     
  });
 */


/// <reference types="cypress" />


describe('First Test', () => {
    before('', () => {
      cy.visit('http://localhost:1667/#/');
    });
    
    it('Sign in for user', () => {
      cy.get(':nth-child(2) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type('serg1221@gmail.com');
      cy.get(':nth-child(2) > .form-control').type('12345678Sb');
      cy.get('.btn').click();
      cy.get('.navbar').contains('serg1221').should('exist');
    });
  });