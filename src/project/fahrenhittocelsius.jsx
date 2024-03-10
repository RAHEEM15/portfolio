FahrenhitToCelsius


import React,{useState} from "react";


const FahrenhitToCelsius = () => {
    const [fahrenhit, setFahrenhit] = useState('');
    const [celsius, setCelsius] = useState('');

    const calculateFaranhit = () => {
        const f = parseFloat(fahrenhit);
        const c = ((f - 32) * 5/9).toFixed(2);
        setCelsius(c);
    }

    return(
        <div>
            <h1>Fahrenhit To Celsius</h1>

            <div>
                <label>Fahrenhit :</label>
                <input type="number" value={fahrenhit} onChange={(e) => setFahrenhit(e.target.value)}/>
            </div>
            <button onClick={calculateFaranhit}>calculate</button>
            {celsius !== null && (
                <div>
                    <h2>celsius : {celsius}</h2>
                </div>
            )}
        </div>
    )
}
