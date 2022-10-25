import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { loadAnswer,loadBackspace,loadButtons,loadClear } from '../redux/CalculatorRedux/calc.actions'
import { CALCULATOR_KEY } from '../redux/CalculatorRedux/calReducer'

const CalculatorApp = () => {
    const dispatch = useDispatch()


      // handle answer 
    const handleAnswer = (e) =>{
        e.preventDefault()
        // alert(number)
      dispatch(loadAnswer())
    }

    // view store 
    const viewCalculator = useSelector((state) =>{
        return state[CALCULATOR_KEY]
    })
    return(
        <>
        <div className="container my-2">
    <div className="row ">
       <div className="col-12">
          <h1 className="display-6 fw-bold text-center text-primary">CALCULATOR</h1>
          <hr />
       </div>
    </div>
    <div className="row justify-content-center">
       <div className="col-md-4">
          <div className="card mb-3 pt-3 shadow">

             <div className="card-body text-primary">
                <input type="text" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow" placeholder="0"  value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans} disabled />
                <div className="row">
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-2" value="AC" onClick={() =>dispatch(loadClear())}>AC</button>
                   </div>

                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-2" value="C"  onClick={() =>dispatch(loadBackspace())}>C</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="/" onClick={() =>dispatch(loadButtons('/'))}>/</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow   p-4 fs-4" value="+" onClick={() =>dispatch(loadButtons('+'))}>+</button>
                   </div>
                </div>
                <div className="row mt-2">
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="9" onClick={() =>dispatch(loadButtons(9))}>9</button>
                   </div>

                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="8" onClick={() =>dispatch(loadButtons(8))}>8</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="7" onClick={() =>dispatch(loadButtons(7))}>7</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="*" onClick={() =>dispatch(loadButtons("*"))}>*</button>
                   </div>
                </div>
                <div className="row mt-2">
                  

                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4"  value="4" onClick={() =>dispatch(loadButtons(4))}>4</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="5" onClick={() =>dispatch(loadButtons(5))}>5</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="6" onClick={() =>dispatch(loadButtons(6))}>6</button>
                   </div>

                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="-" onClick={() =>dispatch(loadButtons("-"))}>-</button>
                   </div>
                </div>
                <div className="row mt-2">
                <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="1" onClick={() =>dispatch(loadButtons(1))}>1</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="2" onClick={() =>dispatch(loadButtons(2))}>2</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="3" onClick={() =>dispatch(loadButtons(3))}>3</button>
                   </div>

                   
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4"  value="+" onClick={() =>dispatch(loadButtons('+'))}>+</button>
                   </div>
                </div>
                
                <div className="row mt-2">
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="0"  onClick={() =>dispatch(loadButtons(0))}>0</button>
                   </div>
                   <div className="col-3">
                      <button className="btn btn-light text-primary shadow  p-4 fs-4" value="=" onClick={handleAnswer}>=</button>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>

        </>
    )
}
export default CalculatorApp;