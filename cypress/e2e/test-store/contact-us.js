describe('Test Contact Us form via Test-Store', () => {
  it('Should be able to submit', () => {
    cy.visit('https://automationteststore.com/')
    // cy.get('#contact-us > .thumbnail').click()
    // cy.get('.info_links_footer > :nth-child(5) > a').click();\
    cy.get("a[href$='contact']").click();
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get('#ContactUsFrm_first_name').type('Nadegda');
    cy.get('#ContactUsFrm_email').type('nadegda@nadegda.com');
    cy.get('#ContactUsFrm_enquiry').type('Nadegda');
    cy.get("button[title='Submit']").click();
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
  });
})

