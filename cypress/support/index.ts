/* eslint-disable */
// @ts-nocheck

declare namespace Cypress {
  interface Chainable {
    clickByTestId(value: string): Chainable<JQuery<HTMLElement>>;
    getByTestId(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
