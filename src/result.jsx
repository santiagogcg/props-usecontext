import './App.css';
import React from 'react';
import { useContext } from 'react';
import calculatorContext from './context';
import { Link } from 'react-router-dom';




const Result = () => {
    const { sum, numbers, resetSum } = useContext(calculatorContext)
    return (
        <div>

            {numbers.map((number) =>
                <p >{number}</p>)}

            <p>Resultado SUMA números arriba={sum}</p>
            <Link to={'/'} >Return to calculator</Link>
            <button onClick={() => { resetSum() }}>Reset</button>

        </div>
    );
};

export default Result;