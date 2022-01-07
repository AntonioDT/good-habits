import React, { useState, useEffect } from 'react';
import './style/app.css';
import GoodButton from './components/GoodButton';
import Counter from './components/Counter';
import ResetButton from './components/ResetButton';
import Records from './components/Records';

function App() {

  let records = {
    first: 0,
    second: 0,
    third: 0
  };

  const [counterValue, setCounter] = useState(0);
  const [recordsValue, setRecords] = useState(records);

  useEffect(() => {
    getLocalItems();
  }, []);

  useEffect(() => {
    saveToLocal();
  }, [counterValue, recordsValue]);

  function getLocalItems() {
    if (localStorage.getItem("localValues") == null) {
      localStorage.setItem("localValues", JSON.stringify([]));
    } else {
      let localItems = JSON.parse(localStorage.getItem("localValues"));
      setCounter(localItems.counterValue);
      setRecords(localItems.records);
    }
  }

  function saveToLocal() {
    let localValues = {
      counterValue: counterValue,
      records: recordsValue
    }
    localStorage.setItem("localValues", JSON.stringify(localValues));
  }

  return (
    <div className="App">
      <div className='page-wrapper'>
        <div className='body-wrapper'>
          <div className='page-title'>GOOD HABITS</div>
          <div className='content-wrapper'>
            <Records 
              value={recordsValue}  
              setRecords={setRecords}
            />
            <div className='flex flex-around'>
              <GoodButton 
                value={counterValue}
                setValue={setCounter}
                records = {recordsValue}
                setRecords={setRecords}
              />
              <Counter 
                value={counterValue}
                setValue={setCounter}
              />
            </div>
            <ResetButton
              value={counterValue}
              setValue={setCounter} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
