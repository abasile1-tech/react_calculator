/*

5.   What does the code do in exceptional circumstances? 
Specifically, if you divide by zero, what is the effect? 
Write a test to describe what you'd prefer to happen, 
and then correct the code to make that test pass 
(you will need to modify the Calculator model to 
  meet this requirement).
*/

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  function getByDataTestId(name) {
    return cy.get(`[data-testid="${name}"]`);
  }

  it("should have working number buttons", () => {
    getByDataTestId("number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should update the display of the running total when number buttons are pushed", () => {
    getByDataTestId("number2").click();
    getByDataTestId("number3").click();
    cy.get(".display").should("contain", "23");
  });

  it("should update the display with the result of the operation", () => {
    getByDataTestId("number2").click();
    getByDataTestId("operator-add").click();
    getByDataTestId("number3").click();
    getByDataTestId("operator-equals").click();
    cy.get(".display").should("contain", "5");
  });

  it("should be able to chain multiple operations together", () => {
    getByDataTestId("number2").click();
    getByDataTestId("operator-add").click();
    getByDataTestId("number3").click();
    getByDataTestId("operator-subtract").click();
    getByDataTestId("number1").click();
    getByDataTestId("operator-equals").click();
    cy.get(".display").should("contain", "4");
  });

  it("should be able to output positive numbers", () => {
    getByDataTestId("number2").click();
    getByDataTestId("operator-add").click();
    getByDataTestId("number5").click();
    getByDataTestId("operator-subtract").click();
    getByDataTestId("number1").click();
    getByDataTestId("operator-equals").click();
    cy.get(".display").should("contain", "6");
  });

  it("should be able to output negative numbers", () => {
    getByDataTestId("number4").click();
    getByDataTestId("operator-add").click();
    getByDataTestId("number1").click();
    getByDataTestId("operator-subtract").click();
    getByDataTestId("number7").click();
    getByDataTestId("operator-equals").click();
    cy.get(".display").should("contain", "-2");
  });

  it("should be able to output decimals", () => {
    getByDataTestId("number2").click();
    getByDataTestId("operator-divide").click();
    getByDataTestId("number3").click();
    getByDataTestId("operator-equals").click();
    cy.get(".display").should("contain", "0.6666666666666666");
  });

  it("should be able to output very large numbers", () => {
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("operator-multiply").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("number9").click();
    getByDataTestId("operator-equals").click();
    cy.get(".display").should("contain", "99999980000001");
  });
});
