describe('Checkboxes tests', () => {
  it('Verify checkboxes', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
  });

  it('Verify checkbox is unchecked', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    cy.get('input[type="checkbox"]')
      .uncheck(['option-3'])
      .should('not.be.checked')
  });
  it('Check multiple checkboxes', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    cy.get('input[type="checkbox"]')
      .check(['option-1', 'option-2', 'option-3', 'option-4'])
      .should('be.checked')
  });
})