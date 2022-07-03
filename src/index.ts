// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

export { aliasQuery, hasQuery } from './utils/graphql-test-utils';
export * from './support';



declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>
    }
  }
}