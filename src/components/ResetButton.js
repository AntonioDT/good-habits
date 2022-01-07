import React from "react";

const ResetButton = ({value, setValue}) => {
    function resetValue() {
        setValue(0);
        let button = document.getElementById("resetButton");
        button.classList.add("button-clicked");
        setTimeout(() => {
            button.classList.remove("button-clicked");
        }, 400);
    }
    return (
        <div className="reset">
            <button id="resetButton" onClick={resetValue}>RESET</button>
        </div>
    )
};

export default ResetButton;