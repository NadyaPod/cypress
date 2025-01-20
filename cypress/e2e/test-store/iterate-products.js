describe('Iterate over product list', () => {
  it('Navigate to product pages', () => {
    cy.visit('https://automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  });
})

