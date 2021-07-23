import { render, fireEvent } from '@testing-library/react';
import CalculatorForm from './components/calculatorForm';


it("Checking Render", () => {
    const { queryByTitle } = render(<CalculatorForm />);
    const form = queryByTitle("chargeForm");
    const inputStart = queryByTitle("startBedtime");
    const inputMid = queryByTitle("bedtimeMid");
    const inputEnd = queryByTitle("midEnd");
    const button = queryByTitle("submitButton")
    expect(form).toBeInTheDocument();
    expect(inputStart).toBeInTheDocument();
    expect(inputMid).toBeInTheDocument();
    expect(inputEnd).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})