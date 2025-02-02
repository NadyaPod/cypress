describe('Iframe tests', () => {
  it('Handle iframe', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#iframe').invoke('removeAttr', 'target').click({force: true});
    cy.get('#frame').then((iframe) => {
      const ibody = iframe.contents().find('body');
      cy.wrap(ibody).as('iframe');    
    });
    cy.get('@iframe').find('#button-find-out-more').click();
    cy.get('@iframe').find('#myModal').as('modal');
    cy.get('@modal').find('.modal-body').then((el) => {
      expect(el.text()).to.include('e sell a wide range of electrical goods')
    });
    cy.get('@modal').contains('Close').click();
  });
})