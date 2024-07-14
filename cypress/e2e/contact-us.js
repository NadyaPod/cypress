describe('Test Contact Us form via WebdriverUni', () => {
  it('Should be able to submit', () => {
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#contact-us > .thumbnail').click()
  });

  it('Should not be able to submit', () => {
    
  });
})

