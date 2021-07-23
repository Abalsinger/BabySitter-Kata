import React, { useState } from 'react';

const CalculatorForm = () => {
    const [startBedtime, setStartBedtime] = useState("");
    const [bedtimeMidnight, setBedtimeMidnight] = useState("");
    const [midnightEnd, setMidnightEnd] = useState("");
    const [nightlyCharge, setNightlyCharge] = useState(0.0);

    const submitCalculation = async (e) => {
        e.preventDefault();

        const validatedStartBedtime = await validateField(startBedtime, setStartBedtime);
        const validatedBedtimeMidnight = await validateField(bedtimeMidnight, setBedtimeMidnight);
        const validatedMidnightEnd = await validateField(midnightEnd, setMidnightEnd);

        if (
            validatedStartBedtime && validatedBedtimeMidnight && validatedMidnightEnd
        ) {
            console.log("Form Fully validated");
            calculateValues();
        } else {
            console.log("Form Error - Check Input Values");
            alert("Form Error - Check Input Values");
        };
    };

    const calculateValues = () => {
        let chargeStartBed = startBedtime * 12;
        let chargeBedMid = bedtimeMidnight * 8;
        let chargeMidEnd = midnightEnd * 16;
        let nightlyCharge = chargeStartBed + chargeBedMid + chargeMidEnd;
        setNightlyCharge(nightlyCharge);
    };

    const validateField = (field, setValue) => {
        let int = parseFloat(field);

        if (field === "" || field === 0) {
            setValue({ ...field.values, error: console.log("Value is incorrect") });
            return false;
        } else {
            setValue(int);
            return true;
        }
    };

    return (
        <div>
            <h1>Time Form</h1>
            <form>
                <div>
                    <label>start to bedtime</label>
                    <input onChange={(e) => setStartBedtime(e.target.value)} type="text" />
                </div>
                <div>
                    <label>bedtime to Midnight</label>
                    <input onChange={(e) => setBedtimeMidnight(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Midnight to End</label>
                    <input onChange={(e) => setMidnightEnd(e.target.value)} type="text" />
                </div>
                <button onClick={(e) => submitCalculation(e)}>Calculate</button>
            </form>
            <h3>Total Charge: ${nightlyCharge.toFixed(2)}</h3>
        </div>
    );
};

export default CalculatorForm;