describe('Autocomplete tests', () => {
  it('Verify autocomplete dropdown list', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true});
    cy.get('#myInput').type('A');
    cy.get('body').find('#myInputautocomplete-list');
    cy.get('#myInputautocomplete-list input').first().click({force: true}).then((el) => {
      const selectedValue = el.val();
      cy.get('[type="submit"]').click();
      cy.url().should('include', selectedValue);
    }).then(() => {
      cy.get('#myInput').type('G');
      cy.get('#myInputautocomplete-list input').first().click({force: true}).then((el) => {
        cy.get('[type="submit"]').click();
        cy.url().should('include', 'food-item=G');
      })
    })
  })
});