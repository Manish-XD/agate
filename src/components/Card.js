import React from 'react'
import Button from './Button'

import {useDispatch} from "react-redux";
import {addItem} from "../redux/slices/cartSlice";

function Card(props) {
  const dispatch = useDispatch();
  return (
    <div className='allproducts__card'>
        <img src={props.img} alt={props.title}/>
        <h1>{props.title}</h1>
        <p>{props.price}$</p>
        <Button title={"BUY NOW"} onClick={e => {dispatch(addItem(props)); props.onOpen();}}/>
    </div>
  )
}

export default Card;