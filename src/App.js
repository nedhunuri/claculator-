import React from 'react';
import './App.css';
import CalculatorApp from './components/CalculatorApp'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    
    <React.Fragment>  
      <Provider store={store}>
      <CalculatorApp/>  
      </Provider>
    </React.Fragment>
     
       
  
  );
}

export default App;