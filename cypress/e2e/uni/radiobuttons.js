describe('Radiobuttons tests', () => {
  it('Verify radiobuttons', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    cy.get('#radio-buttons').find('input[type="radio"]').first().check();
  });

  it('Validate state of radiobuttons', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    cy.get('[value=lettuce]').should('not.be.checked');
    cy.get('[value=pumpkin]').should('be.checked');
    cy.get('[value=lettuce]').check();
    cy.get('[value=lettuce]').should('be.checked');
    cy.get('[value=pumpkin]').should('not.be.checked')
    cy.get('[value=cabbage]').should('be.disabled');
  })
})