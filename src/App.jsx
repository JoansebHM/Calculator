import { useState } from 'react';
import './App.css'

const App = () => {

  const [state, setState] = useState('')

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setState('')
    } 
    else if (value === 'DE') {
      setState(prevState => prevState.slice(0, -1))
    }
    else if (value === '=') {
      try {
        const result = eval(state);
        if (isNaN(result) || !isFinite(result)) {
          setState('Error: Division by 0');
          setTimeout(() => {
            setState('');
          }, 1000);
        } else {
          setState(parseFloat(result.toFixed(3)).toString());
        }

      } catch (error) {
        setState('Syntax Error');
        setTimeout(() => {
          setState('');
        }, 1000);

      }
    } else {
      if (isNumeric(value)) {
        setState(prevState => prevState + value)
      } else {
        const lastChar = state.slice(-1)

        if (isNumeric(lastChar)) {
          setState(prevState => prevState + value);
        } 
        else {
          setState(prevState => prevState.slice(0, -1) + value)
        }
      }
    }
  };

  const isNumeric = (str) => {
    return !isNaN(str) && str !== ' ';
  };

  return (
    <div className='calculator'>
      <div className='calculator-name'>
      <p><strong>Casio  <span className="red-text">FX-350ES Plus</span></strong></p>
      </div>
      <form action="">
        <input type="text" value={state} readOnly />
      </form>
      <div className='calculator-buttons'>
      <div className='button-section'>
        <button onClick={() => handleButtonClick('AC')}>AC</button>
        <button onClick={() => handleButtonClick('DE')}>DE</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>÷</button>
      </div>
      <div className='button-section'>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>x</button>
      </div>
      <div className='button-section'>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className='button-section'>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className='button-section'>
        <button onClick={() => handleButtonClick('00')}>00</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
      </div>
      </div>
    </div>
  );
};

export default App;
