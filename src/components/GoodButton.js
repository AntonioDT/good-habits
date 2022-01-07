import React from "react";

const GoodButton = ({value, setValue, records, setRecords}) => {
    function incrementValue() {
        let newValue = value+1;
        setValue(newValue);
        let button = document.getElementById("addButton");
        button.classList.add("button-clicked");
        setTimeout(() => {
            button.classList.remove("button-clicked");
        }, 400);
        let newRecords = {
            first: records.first,
            second: records.second,
            third: records.third
        };
        if (newValue > records.first) {
            newRecords.first = newValue;
            setRecords(newRecords);
        } else if (newValue > records.second) {
            newRecords.second = newValue;
            setRecords(newRecords);
        } else if (newValue > records.third) {
            newRecords.third = newValue;
            setRecords(newRecords);
        }
    }
    return (
        <div className="button-container">
            <button id="addButton" onClick={incrementValue}>+</button>
        </div>
    );
}

export default GoodButton;