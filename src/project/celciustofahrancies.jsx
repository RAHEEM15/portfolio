export default Celciustofehrenhit;


 
CelsiusToFehrenhit


import React, { useState } from "react";

const CelsiusToFehrenhit = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenhit, setFahrenhit] = useState(null);

    const celsiusToFahrenhit = () => {
        const c = parseFloat(celsius);
        const f = c * (9 / 5) + 32;

        const calculatedFahrenhit = (f ).toFixed(2);
        setFahrenhit(calculatedFahrenhit);
    }

    return (
        <div>
            <h1>Celsius To Fahrenhit</h1>
            <div>
                <label>Celsius :</label>
                <input type="number" value={celsius} onChange={(e) => setCelsius(e.target.value)} />
 
            </div>
            <button onClick={celsiusToFahrenhit}>Calculate</button>
            {fahrenhit !== null && (
                <div>
                    <h2>Fahrenhit : {fahrenhit}</h2>
                </div>
            )}
        </div>
            )
}
export default CelsiusToFahrancies;