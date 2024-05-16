require('cypress-xpath')

describe('technical chalenger spec', () => {

  it('store redirect validation', () => {
    //Access the home page of the web portal
    cy.once('uncaught:exception', () => false )
    cy.visit("https://www.vr.com.br/", {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
      }
    });

    // Click on the "Compre online" button to navigate to the store
    cy.get('button[id="buttonCompreOnline"]').click();

    // validate if the window.open was called
    cy.window().its('open').should('be.called')
  });

  it('should add Auto product to cart successfully', () => {
    cy.addProductToCart('Cartão Auto');
  });
})