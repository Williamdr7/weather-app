describe("Home page", () => {
  it("visit home", () => {
    cy.visit("http://localhost:5173");
  });

  it("should render title", () => {
    cy.getByTestId("home-title").contains(
      "Type or choose a city to know weather"
    );
  });

  it("should render nine cities with link on suggestions list", () => {
    cy.getByTestId("city-suggestion-link")
      .should("be.visible")
      .should("have.length", 9);

    cy.get("a").should("have.length", 9);

    cy.getByTestId("city-suggestion-link")
      .first()
      .should("have.attr", "href", "/Los Angeles");
  });

  it("should render city search input and show error", () => {
    cy.getByTestId("city-search-input").should("be.visible");
    cy.clickByTestId("search-button").then(() => {
      cy.getByTestId("search-input-error-message").contains("required", {
        matchCase: false,
      });
    });
  });

  it("should search and return city not found", () => {
    cy.getByTestId("city-search-input").type("fakecityname{enter}");
    cy.get(".Toastify__toast-body").contains("city not found");
  });

  describe("should work correctly on expected user flow", () => {
    it("reload", () => {
      cy.reload();
    });

    it("should search New York and render city page", () => {
      cy.getByTestId("city-search-input").type("New York{enter}");
      cy.getByTestId("city-name").contains("New York");
    });
  });
});
