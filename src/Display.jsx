import { ADD, MULTIPLY, DIVIDE } from './state/constants';
import "./Display.css";
const Display = (props) => {
    let calculatorList = props.mainValue;
    for (let i = 0; i < props.operationList.length; i++) {
        calculatorList += " ";
        switch (props.operationList[i].type) {
            case ADD:
                if (props.operationList[i].value !== null) {
                    if (props.operationList[i].value[0] === '-') {
                        break;
                    }
                }
                calculatorList += '+';
                break;
            case MULTIPLY:
                calculatorList += '*';
                break;
            case DIVIDE:
                calculatorList += '÷'
                break;
            default:
        }
        calculatorList += " "
        if (props.operationList[i].value != null) {
            if (props.operationList[i].value[0] === '-') {
                calculatorList += '- ';
            }
            if (props.operationList[i].value !== '-') {
                calculatorList += Math.abs(parseFloat(props.operationList[i].value));
            }
            if (props.operationList[i].value[props.operationList[i].value.length - 1] === '.') {
                calculatorList += '.';
            }
        }
    }
    return (
        <div id="display">
            {calculatorList}
        </div>
    );
}
export default Display;