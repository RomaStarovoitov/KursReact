import React from 'react'
import axios from 'axios';
import Item from './Item';
import { useState,useEffect} from 'react';

const Card = () => {
    
const [cardsData, setcardsData] = useState([])
useEffect (()=>{
  async function axiosData(){
    const cartData = await axios.get('https://644765057bb84f5a3e3da48b.mockapi.io/form/cards')
    setcardsData(cartData.data)
  }
  axiosData();
},[])
  return (
    
    <div class="d-flex justify-content-center flex-wrap gap-5">
        { 
      cardsData.map(obj=>{
        return(
           <Item
           id={obj.id}
           name={obj.name}
           price={obj.price}
           imgPath={obj.imgPath}
           description={obj.description}
           />
        )
      })
    }
    </div>
  )
}

export default Card