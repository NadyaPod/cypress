describe('Test Contact Us form via WebdriverUni', () => {
  it('Should be able to submit', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    // cy.get('#contact-us > .thumbnail').click()
    cy.get('[name="first_name"]').type('Nadegda');
    cy.get('[name="last_name"]').type('Nadegda');
    cy.get('[name="email"]').type('nadegda@nadegda.com');
    cy.get('textarea.feedback-input').type('Nadegda');
    cy.get('[type="submit"]').click( );
    cy.get('h1').should('have.text', 'Thank You for your Message!');

  });
  it.only('Should not be able to submit', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Nadegda');
    cy.get('[name="last_name"]').type('Nadegda');
    cy.get('[type="submit"]').click( );
    cy.get('body').contains('Error: all fields are required');
  })
})

