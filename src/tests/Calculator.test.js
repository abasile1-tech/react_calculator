import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should add 1 to 4 and get 5", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const button2 = container.getByTestId("operator-add");
    fireEvent.click(button2);
    const button3 = container.getByTestId("number4");
    fireEvent.click(button3);
    const button4 = container.getByTestId("operator-equals");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should subtract 4 from 7 and get 3", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number7");
    fireEvent.click(button1);
    const button2 = container.getByTestId("operator-subtract");
    fireEvent.click(button2);
    const button3 = container.getByTestId("number4");
    fireEvent.click(button3);
    const button4 = container.getByTestId("operator-equals");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should multiply 3 by 5 and get 15", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number3");
    fireEvent.click(button1);
    const button2 = container.getByTestId("operator-multiply");
    fireEvent.click(button2);
    const button3 = container.getByTestId("number5");
    fireEvent.click(button3);
    const button4 = container.getByTestId("operator-equals");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("15");
  });

  it("should divide 21 by 7 and get 3", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number2");
    fireEvent.click(button1);
    const button2 = container.getByTestId("number1");
    fireEvent.click(button2);
    const button3 = container.getByTestId("operator-divide");
    fireEvent.click(button3);
    const button4 = container.getByTestId("number7");
    fireEvent.click(button4);
    const button5 = container.getByTestId("operator-equals");
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should concatenate multiple number button clicks", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number2");
    fireEvent.click(button1);
    const button2 = container.getByTestId("number1");
    fireEvent.click(button2);
    const button3 = container.getByTestId("number3");
    fireEvent.click(button3);
    const button4 = container.getByTestId("number7");
    fireEvent.click(button4);
    const button5 = container.getByTestId("number4");
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual("21374");
  });

  it("should chain multiple operations together", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number2");
    fireEvent.click(button1);
    const button2 = container.getByTestId("operator-add");
    fireEvent.click(button2);
    const button3 = container.getByTestId("number7");
    fireEvent.click(button3);
    const button4 = container.getByTestId("operator-subtract");
    fireEvent.click(button4);
    const button5 = container.getByTestId("number4");
    fireEvent.click(button5);
    const button6 = container.getByTestId("operator-equals");
    fireEvent.click(button6);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should clear the running total without affecting the calculation", () => {
    const runningTotal = container.getByTestId("running-total");
    const button1 = container.getByTestId("number2");
    fireEvent.click(button1);
    const button2 = container.getByTestId("operator-add");
    fireEvent.click(button2);
    const button3 = container.getByTestId("number7");
    fireEvent.click(button3);
    const button4 = container.getByTestId("operator-equals");
    fireEvent.click(button4);
    const button5 = container.getByTestId("clear");
    fireEvent.click(button5);
    const button6 = container.getByTestId("operator-add");
    fireEvent.click(button6);
    const button7 = container.getByTestId("number4");
    fireEvent.click(button7);
    const button8 = container.getByTestId("operator-equals");
    fireEvent.click(button8);
    expect(runningTotal.textContent).toEqual("13");
  });
});
