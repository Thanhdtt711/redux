import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { doIncrementCounter, doDecrementCounter } from '../redux/actions/counterAction';
import counterSelector from '../redux/selectors/counterSelector';
import productSelector from '../redux/selectors/productSelector';

export default function Counter({step}) {

  const dispatch = useDispatch();  

  const count = useSelector(counterSelector);

  const products = useSelector(productSelector);

  const handleIncrement = () => {
        dispatch(doIncrementCounter(step));
  }  

  const handleDecrement = () => {
    dispatch(doDecrementCounter(step));
} 

  return (
    <div>
        <h1>Count: {count}</h1>
        <button type='button' onClick={handleDecrement}>-</button>
        <button type='button' onClick={handleIncrement}>+</button>

        <hr/>
        {
            products.map((product, index) => <p key={index}>{product}</p>)
        }
    </div>
  )
}
