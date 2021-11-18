describe('Twitter Clone - Login', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        hostname: 'res.cloudinary.com',
      },
      {
        statusCode: 200,
        fixture: 'download',
      },
    ).as('cloudinary');
  });

  it('should be able to authenticate with valid credentials and be directed to the feed', () => {
    cy.login();

    cy.visit('/');

    cy.get('nav ul li').should('be.visible').and('have.length', 6);
  });
});
