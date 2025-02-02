describe('Alerts test', () => {
  it('Alerts contains the correct text', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
    cy.get('#button1').click();
    cy.on('window:alert', (str) => expect(str).to.eql('I am an alert box!'));   
  });

  it('Click cancel on alert', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
    cy.get('#button4').click();
    cy.on('window:confirm', () => {return false});
    cy.get('#confirm-alert-text').contains('Cancel');
  });

  it('Click ok on alert', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
    cy.get('#button4').click();
    cy.on('window:confirm', () => {return true});
    cy.get('#confirm-alert-text').contains('OK');
  });

  it('Click ok on alert stub', () => {
    cy.visit('https://webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click();

    const stub = cy.stub();
    cy.on('window:confirm', stub);
    cy.get('#button4').click().then(() => expect(stub.getCall(0)).to.be.calledWith('Press a button!'));
  });
})