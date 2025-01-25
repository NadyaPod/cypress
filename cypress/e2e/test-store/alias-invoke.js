describe('Alias invoke', () => {
  it('Validate specific product', () => {
    cy.visit('https://automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).invoke('text').as('ProductName');
    cy.get('@ProductName').should('have.length', 19);
  });
  it('Validate products', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.thumbnail').as('ProductList');
    cy.get('@ProductList').should('have.length', 16);
    cy.get('@ProductList')
      .each((el, i, list) => {
        cy.wrap(el).find('.productcart').invoke('attr', 'title').as('title');
        cy.log('@title')
        cy.get('@title').should('eq', 'Add to Cart')
      });
  });
  it.only('Calculate total price', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
    let totalPrice = 0;
    cy.get('@itemPrice').then(price => {
      let itemPrice = price.split('$');
      let nonSaleSum = 0;
      itemPrice.forEach(element => {
        cy.log(element)
        nonSaleSum += +element;
      });
      totalPrice += nonSaleSum;
      cy.log('Non sale total price: ' + nonSaleSum);
    });
    cy.get('@saleItemPrice').then(price => {
      let saleItemPrice = price.split('$');
      let saleSum = 0;
      saleItemPrice.forEach(element => {
        cy.log(element)
        saleSum += +element;
      });
      totalPrice += saleSum;
      cy.log('Sale total price: ' + saleSum);
    })
    .then(() => {
      expect(totalPrice).to.equal(573.5);
      cy.log('Total price: ' + totalPrice);
    })
  });
})