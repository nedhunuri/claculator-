import { calculatorReducer } from './CalculatorRedux/calReducer'
import { CALCULATOR_KEY } from './CalculatorRedux/calReducer'
import {combineReducers} from 'redux'
let rootReducer = combineReducers({
    [CALCULATOR_KEY]:calculatorReducer
})

export {rootReducer}