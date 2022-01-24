import React from 'react';
import { useSelector } from "react-redux";
import Display from './Display';
import Buttons from './Buttons';


const App = () => {
  const mainValue = useSelector(state => state.mathReducer);
  const operationList = useSelector(state => state.operationReducer);
  return (
    <div className="container-fluid">
      <Display operationList={operationList} mainValue={mainValue}/>
      <Buttons operationList={operationList} mainValue={mainValue}/>
    </div>
  );
}

export default App;
