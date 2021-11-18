/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Cypress {
  interface Chainable {
    /**
     * @example cy.login()
     */
    login(): Chainable<Element>; // Return void to JavaScript file

    /**
     * @example cy.token()
     */
    token(): Chainable<Element>; // Return void to JavaScript file
  }
}
