import './App.css';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import calculatorContext from './context';


function Calculator() {
    const { numbers, setNumbers, handleButtonCalculator, sumTotal, sum } = useContext(calculatorContext)
    return (
        <>

            <div >
                <p className='singleNumber'>{numbers[numbers.length - 1]}</p>

                <div >
                    <button onClick={() => { handleButtonCalculator(1) }}>1</button>
                    <button onClick={() => { handleButtonCalculator(2) }}>2</button>
                    <button onClick={() => { handleButtonCalculator(3) }}>3</button>
                </div>
                <div>
                    <button onClick={() => { handleButtonCalculator(4) }}>4</button>
                    <button onClick={() => { handleButtonCalculator(5) }}>5</button>
                    <button onClick={() => { handleButtonCalculator(6) }}>6</button>
                </div >
                <div>
                    <button onClick={() => { handleButtonCalculator(7) }}>7</button>
                    <button onClick={() => { handleButtonCalculator(8) }}>8</button>
                    <button onClick={() => { handleButtonCalculator(9) }}>9</button>
                </div>
                <div>
                    <button onClick={() => { handleButtonCalculator(0) }}>0</button>
                    <Link to={'/result'} >Link to RESULT</Link>



                </div>
            </div >






            {/* {numbers.map((number) =>
                <p>{number}</p>

            )} */}

        </>
    );
}

export default Calculator;
