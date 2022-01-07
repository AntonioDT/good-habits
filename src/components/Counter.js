import React from "react";

const Counter = ({value, setValue}) => {
    return (
        <div className="counter-container">
            <h3>{value}</h3>
        </div>
    );
}

export default Counter;