describe('Navigation tests', () => {
  it('Redirect to correct pages', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#contact-us').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'contact');
    cy.go('back');
    cy.reload().url().should('include', 'https://webdriveruniversity.com');
    cy.go('forward').url().should('include', 'contact');
    cy.go('back');
    cy.get('#login-portal').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'Login');
    cy.go('back');
    cy.get('#to-do-list').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'To-Do');
    cy.go('back');
  });
})