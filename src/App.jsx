import './App.css';
import React, { useEffect, useState } from 'react';
import Calculator from './calculator';
import calculatorContext from './context';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Result from './result';


function App() {

  const [numbers, setNumbers] = useState([])
  const [sum, setSum] = useState(0)

  const handleButtonCalculator = async (number) => {
    setNumbers([...numbers, number])




  }


  useEffect(() => {



    numbers.map((number) => {
      let suma = (number) + (sum)
      setSum(suma)

    })



  }, [numbers]);


  const resetSum = (() => {

    setSum(0)
    setNumbers([])

  })




  return (
    <div className='App'>
      <calculatorContext.Provider value={{ numbers, setNumbers, handleButtonCalculator, sum, setSum, resetSum }}>
        <Router>

          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/result" element={<Result />} />
          </Routes>

        </Router>


      </calculatorContext.Provider >

    </div>
  );
}

export default App;
