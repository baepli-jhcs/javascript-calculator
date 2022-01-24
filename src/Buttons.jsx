import { useDispatch } from "react-redux";
import { ADD, MULTIPLY, DIVIDE } from './state/constants';
import { operationActions } from './state/slices/operation';
import { mathActions } from './state/slices/math';
import { bindActionCreators } from '@reduxjs/toolkit';
import "./Buttons.css";
let buttonNames = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
}
const Buttons = (props) => {
    const dispatch = useDispatch();
    const { addValue, multiplyValue, divideValue, clearValue, setValue } = bindActionCreators(mathActions, dispatch);
    const { clearList, addList, changeList } = bindActionCreators(operationActions, dispatch);
    let numberButtons = [];
    for (let i = 9; i >=0; i--) {
        numberButtons.push(<button id={buttonNames[i]} onClick={() => {
            if (props.operationList.length === 0) {
                setValue((props.mainValue === '0' ? '' : props.mainValue) + i);
            } else if (props.operationList[props.operationList.length - 1].value != null) {
                changeList(props.operationList[props.operationList.length - 1].value + '' + i);
            } else {
                changeList(i + '');
            }
        }}>{i}</button>);
    }
    return (
        <div id="buttons">
            {numberButtons}
            <button id="decimal" onClick={() => {
                if (props.operationList.length === 0 && props.mainValue.indexOf('.') === -1) {
                    setValue(props.mainValue + ".");
                } else if (props.operationList.length === 0 && props.mainValue.indexOf('.') !== -1) {
                } else if (props.operationList[props.operationList.length - 1].value !== null && props.operationList[props.operationList.length - 1].value.indexOf(".") === -1) {
                    changeList(props.operationList[props.operationList.length - 1].value + '.');
                } else if (props.operationList[props.operationList.length - 1].value.indexOf(".") === -1) {
                    changeList("0.");
                }
            }}>.</button>
            <button id="add" onClick={() => {
                if (props.operationList.length === 0) {
                    addList({ type: ADD, value: null });
                }
                else if (props.operationList[props.operationList.length - 1].value !== null) {
                    addList({ type: ADD, value: null });
                }
            }}>+</button>
            <button id="subtract" onClick={() => {
                if (props.operationList.length === 0) {
                    addList({ type: ADD, value: '-' });
                } else if (props.operationList[props.operationList.length - 1].value === null) {
                    changeList('-');
                } else if (props.operationList[props.operationList.length - 1].value !== '-') {
                    addList({ type: ADD, value: '-' });
                }
            }}>-</button>
            <button id="multiply" onClick={() => {
                if (props.operationList.length === 0) {
                    addList({ type: MULTIPLY, value: null });
                } else if (props.operationList[props.operationList.length - 1].value !== null) {
                    addList({ type: MULTIPLY, value: null });
                }
            }}>*</button>
            <button id="divide" onClick={() => {
                if (props.operationList.length === 0) {
                    addList({ type: DIVIDE, value: null });
                } else if (props.operationList[props.operationList.length - 1].value !== null) {
                    addList({ type: DIVIDE, value: null });
                }
            }}>/</button>
            <button id="clear" onClick={() => {
                clearValue();
                clearList();
            }}>A/C</button>
            <button id="equals" onClick={() => {
                const doMath = (pair) => {
                    if (pair.value !== (null || '-')) {
                        switch (pair.type) {
                            case ADD:
                                addValue(pair.value);
                                break;
                            case MULTIPLY:
                                multiplyValue(pair.value);
                                break;
                            case DIVIDE:
                                divideValue(pair.value);
                                break;
                            default:
                        }
                    };
                };
                for (let i = 0; i < props.operationList.length; i++) {
                    doMath(props.operationList[i]);
                }
                clearList();
            }}>=</button>
        </div>
    )
}
export default Buttons;