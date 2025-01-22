describe('Alias invoke', () => {
  it('Validate specific product', () => {
    cy.visit('https://automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).invoke('text').as('ProductName');
    cy.get('@ProductName').should('have.length', 19);
  });
  it.only('Validate products', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.thumbnail').as('ProductList');
    cy.get('@ProductList').should('have.length', 16);
    cy.get('@ProductList')
      .each((el, i, list) => {
        cy.wrap(el).find('.productcart').invoke('attr', 'title').as('title');
        cy.log('@title')
        console.log('@title')
        cy.get('@title').should('eq', 'Add to Cart')
      });
  });
})