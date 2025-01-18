describe('Test Contact Us form via Test-Store', () => {
  it('Should be able to submit', () => {
    cy.visit('https://automationteststore.com/');
    cy.document().its('charset').should('eq', 'UTF-8');
    cy.title().should('include', 'A place to practice');
    // cy.get('#contact-us > .thumbnail').click()
    // cy.get('.info_links_footer > :nth-child(5) > a').click();\
    cy.get("a[href$='contact']").click().then((itemName) => cy.log(itemName.text()));
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get('#ContactUsFrm_first_name').type('Nadegda');
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
    cy.get('#ContactUsFrm_email').type('nadegda@nadegda.com');
    cy.get('#ContactUsFrm_enquiry').type('Nadegda');
    cy.get("button[title='Submit']").click();
    cy.url().should('include', 'contact');
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    cy.visit('https://automationteststore.com/');
    cy.get("a[href$='contact']").click();
    cy.get('#ContactUsFrm label').first().then(el => {
      expect(el.text()).to.be.eq('First name:')
    }) 
  });
})

