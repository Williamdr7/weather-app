describe("City Weather Page", () => {
  beforeEach(() => {
    cy.intercept(
      `/data/2.5/weather?q=Los%20Angeles&units=metric&appid=${Cypress.env(
        "api_key"
      )}`,
      {
        fixture: "/current-city-weather.json",
      }
    );
    cy.intercept(
      `/data/2.5/forecast?lat=34.0522&lon=-118.2437&appid=${Cypress.env(
        "api_key"
      )}`,
      {
        fixture: "/weather-forecast-by-city.json",
      }
    );
  });
  it("visit city page", () => {
    cy.visit("http://localhost:5173/Los Angeles");
  });

  it("should render current weather values", () => {
    cy.getByTestId("current-weather-description").contains("Overcast clouds");
    cy.getByTestId("current-weather-temp").contains("15");
    cy.clickByTestId("measure-switch-opt-farenheit");
    cy.getByTestId("current-weather-temp").contains("58");
    cy.getByTestId("current-weather-max-temp").contains("61");
    cy.getByTestId("current-weather-min-temp").contains("55");
    cy.getByTestId("current-weather-feels-like").contains("58");
    cy.getByTestId("current-weather-wind-speed").contains("3 km/h");
    cy.getByTestId("current-weather-clouds").contains("100");
    cy.getByTestId("current-weather-humidity").contains("83%");
    cy.getByTestId("current-weather-sunrise").contains("11:55 am");
    cy.getByTestId("current-weather-sunset").contains("10:14 pm");
  });

  it("should render upcoming days weather values", () => {
    cy.getByTestId("weather-forecast-next-day-1").contains("70");
    cy.getByTestId("weather-forecast-next-day-1").contains("Clear sky");

    cy.getByTestId("weather-forecast-next-day-2").contains("75");
    cy.getByTestId("weather-forecast-next-day-2").contains("Broken clouds");

    cy.getByTestId("weather-forecast-next-day-3").contains("78");
    cy.getByTestId("weather-forecast-next-day-3").contains("Overcast clouds");

    cy.getByTestId("weather-forecast-next-day-4").contains("77");
    cy.getByTestId("weather-forecast-next-day-4").contains("Broken clouds");

    cy.get("canvas").should("have.length", 4);
  });

  it("should render all charts", () => {
    cy.get("canvas").should("have.length", 4);
  });
});
