describe('Dropdowns tests', () => {
  it('Select specific values', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    cy.get('#dropdowm-menu-1').select('c#');
    cy.get('#dropdowm-menu-1').should('be.value', 'c#');
    cy.get('#dropdowm-menu-1').should('not.be.value', 'java');
    cy.get('#dropdowm-menu-2').select('Maven').should('be.value', 'maven');
    cy.get('#dropdowm-menu-2').select('TestNG').should('be.value', 'testng');
  });
});