import React from 'react';

const CalculatorForm = () => {
    return (
        <div>
            <h1>Time Form</h1>
            <form>
                <div>
                    <label>Hours Start to Bedtime</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Hours Bedtime to Midnight</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Hours Midnight to End</label>
                    <input type="text" />
                </div>
                <button>Calculate</button>
            </form>
            <h3>Total Charge</h3>
        </div>
    );
};

export default CalculatorForm;