describe('Iterate over product list', () => {
  it('Navigate to product pages', () => {
    cy.visit('https://webdriveruniversity.com/Accordion/index.html');
    cy.get('.accordion')
      .each((el, i, list) => {
        if (el.text() === 'Cucumber BDD') {
          cy.wrap(el).click();
        } else {
          cy.wrap(el).log('Index' + i + ':' + el.text())
        }
      });
  });
})

