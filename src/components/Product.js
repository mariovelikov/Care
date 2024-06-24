import React, { useState } from 'react'
import './Product.css'

function Product({productDetails}) {
  const favorites = JSON.parse(localStorage.getItem("favorites"))
  const [fav, setFav] = useState(checkFavoriteExist)

  function checkFavoriteExist(){
    let bool = false;
    
    for(const [_, value] of Object.entries(favorites)){
      if(value.id === productDetails.id){
        bool = true
        break;
      }
    }
    
    return bool;
  }
  
  const addToFavorites = () => {
    setFav(!fav)
    const favorites = JSON.parse(localStorage.getItem('favorites'))

    if(!favorites || favorites.length === 0){
      const data = [productDetails]

      localStorage.setItem('favorites', JSON.stringify(data))
    }else{
      let newData = favorites;

      const checkExist = () => {
        let bool = false;

        favorites.forEach(element => {
          if(element.id === productDetails.id){
            bool = true
          }
        });
        return bool;
      }

      if(checkExist()){
        newData = favorites.filter(obj => obj.id !== productDetails.id)
      }else{
        newData.push(productDetails);
      }
      localStorage.setItem("favorites", JSON.stringify(newData))
    }
  }

  return (
    <div className='product-box'>
         <div className='product-img-box'>
           <img src={productDetails.images[0].src} alt={productDetails.title}/>
         </div>
         <div className='title-title-price-box'>
           <p className='title'>{productDetails.title}</p>
           <p className='price'>$ {productDetails.variants[0].price}</p>
         </div>
         <div className={fav ? "red-heart":""} onClick={(event) => addToFavorites(event)}>
            <ion-icon name={fav ? "heart":"heart-outline"}></ion-icon>
         </div>
    </div>
  )
}

export default Product
