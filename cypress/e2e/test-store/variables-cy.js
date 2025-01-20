describe('Verify variables', () => {
  it('Navigate to product pages', () => {
    cy.visit('https://automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();
    cy.get("a[href*='product/category&path=']").contains('Skin').click();
    cy.get('h1>span.maintext').then(el => {
      const headerText = el.text();
      cy.log('Log text: ' + headerText);
      expect(headerText).to.be.eq('Skincare')
    });
  });
})

