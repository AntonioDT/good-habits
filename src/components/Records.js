import React from "react";
import recycle from "../images/recycle.png"

const Records = ({value, setRecords}) => {

    function resetRecords() {
        let newRecords = {
            first: 0,
            second: 0,
            third: 0
        };
        setRecords(newRecords);
    }

    return (
        <div className="records-container">
            <div className="record-title flex">
                <div>RECORDS</div>
                <button onClick={resetRecords}>
                    <img src={recycle} height="24px" width="24px" alt="reset"></img>
                </button>
            </div>
            <ol>
                <li>{value.first}</li>
                <li>{value.second}</li>
                <li>{value.third}</li>
            </ol>
        </div>
    );
};

export default Records;