import React from 'react'

const Item = (data) => {
  return (
    
    <div class="card" style={{width: 18 + 'em'}}>
    <img class="card-img" src={'./img/product/'+data.imgPath+'.jpg'} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{data.name}</h5>
      <p class="card-text">{data.description}</p>
      <p class="btn btn-outline-primary btn-lg">{data.price + ' руб.'}</p>
    </div>
  </div>
  )
}

export default Item