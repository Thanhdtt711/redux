import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import productSelector from '../redux/selectors/productSelector'
import { doAddProduct } from '../redux/actions/productAction';
import counterSelector from '../redux/selectors/counterSelector';

export default function Product() {

  const products = useSelector(productSelector);  

  const count = useSelector(counterSelector);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
        doAddProduct('Sản phẩm: '+Math.random())
    );
  }

  return (
    <div>
        <h1>Sản phẩm: {count}</h1>
        {
            products.map((product, index) => <p key={index}>{product}</p>)
        }
        <button type='button' onClick={handleAdd}>Thêm</button>
    </div>
  )
}
