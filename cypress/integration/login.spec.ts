describe('Twitter Clone - Login', () => {
  it('Login com usuário e senha válidos', () => {
    cy.visit('https://twitter-clone-example.herokuapp.com/');

    cy.get('input[type=email]').type('johndoe@sharbe.com.br');
    cy.get('input[type=password]').type('7Q3pKF9VG7cDGkQ');
    cy.get('button[type=submit]').click();
  });
});
