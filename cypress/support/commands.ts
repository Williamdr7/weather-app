/// <reference types="cypress" />

Cypress.Commands.add("getByTestId", (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add("clickByTestId", (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args).click();
});
