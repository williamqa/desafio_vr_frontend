
Cypress.Commands.add('addProductToCart', (cardModel) => {
    cy.once('uncaught:exception', () => false )
    // Access the store page
    cy.visit("https://loja.vr.com.br/");

    // Close the modal that appears on the screen    
    cy.get('.close-button').click();

    // Accept the terms of use
    cy.get('[data-testid="terms-consent"]').click();

    // Select the "Cartões VR" option
    cy.get('button[id="btn-selecionar-modalidade-avulso"]').should('be.visible').click();

    // Add a random quantity of "Auto" product cards
    const randomQuantity = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < randomQuantity; i++) {
      cy.xpath('//img[@alt="'+cardModel+'"]/../..//*[contains(@class,"plus-button")]').should('be.visible').click();
    }

    // Enter a random credit value for the "Auto" product
    const randomCreditValue = Math.floor(Math.random() * 100000) + 1;
    cy.get('input[id="produto-auto-valor"]').should('be.visible').type(randomCreditValue);

    // Click on the "Adicionar ao carrinho" button
    cy.get('button[id="btn-adicionar-carrinho-auto"]').should('be.visible').click();

    // Validate that the product was successfully added to the cart
    cy.contains('Produto adicionado!').should('be.visible');
})
