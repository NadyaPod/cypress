describe('Test item selection via Test-Store', () => {
  it('Should be able to click item header via text', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.prdocutname').contains('Stick').click();
  });

  it('Should be able to click item header via index', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
})

