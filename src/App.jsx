import React from 'react';
import { useSelector } from "react-redux";
import Display from './Display';
import Buttons from './Buttons';
import './App.css';


const App = () => {
  const mainValue = useSelector(state => state.mathReducer);
  const operationList = useSelector(state => state.operationReducer);
  return (
    <div className="background">
      <div className="calculator">
        <div className="display-container">
          <Display operationList={operationList} mainValue={mainValue} />
        </div>
        <div className="buttons-container">
          <Buttons operationList={operationList} mainValue={mainValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
