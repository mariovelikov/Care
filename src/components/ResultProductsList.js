<<<<<<< HEAD
import React, { useLayoutEffect, useState } from 'react'
import "./ResultProductsList.css"
import Product from './Product'
import DailyRoutine from './DailyRoutine';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ResultProductsList(props) {
  let products =props.products;
  const daily  = props.daily;
  const favorites = JSON.parse(localStorage.getItem("favorites"))
  
  let finalData = favorites; 
  const [state, setState] = useState(finalData) 

  // when i change state, an endless cycle begins, and this is for stopping it
  const [stopRender, setStopRender] = useState(false) 

  useLayoutEffect(() => {
    
    if(products && stopRender === false){
      if(favorites){
        addFavoritesFirst();
      }else{
        localStorage.setItem("favorites", JSON.stringify([]))
        setState(products)
      }
      setStopRender(true)
    }
    
  }, [products])

  const addFavoritesFirst = () => {
    products.forEach(product => {
      if(!checkRepetitive(product)){
        finalData.push(product);
      }
    })
    setState(finalData);
  }

  const checkRepetitive = (product) => {
    let bool = false;
      favorites.forEach(fav =>{
        if(product.id === fav.id){
          bool = true;
        }
      })
    return bool;
  }
  
  return (
    <div className="products-box">
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={36}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.products-next-btn',
          prevEl: '.products-back-btn',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DailyRoutine dailyDetails ={daily}/>
        </SwiperSlide>
         
        {state?.map((product, index) => (
          <SwiperSlide key={index}>
            <Product productDetails = {product} />
          </SwiperSlide> 
        ))}
      </Swiper>
    </div>
  )
}

=======
import React, { useLayoutEffect, useState } from 'react'
import "./ResultProductsList.css"
import Product from './Product'
import DailyRoutine from './DailyRoutine';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ResultProductsList(props) {
  let products =props.products;
  const daily  = props.daily;
  const favorites = JSON.parse(localStorage.getItem("favorites"))
  
  let finalData = favorites; 
  const [state, setState] = useState(finalData) 

  // when i change state, an endless cycle begins, and this is for stopping it
  const [stopRender, setStopRender] = useState(false) 

  useLayoutEffect(() => {
    
    if(products && stopRender === false){
      if(favorites){
        addFavoritesFirst();
      }else{
        localStorage.setItem("favorites", JSON.stringify([]))
        setState(products)
      }
      setStopRender(true)
    }
    
  }, [products])

  const addFavoritesFirst = () => {
    products.forEach(product => {
      if(!checkRepetitive(product)){
        finalData.push(product);
      }
    })
    setState(finalData);
  }

  const checkRepetitive = (product) => {
    let bool = false;
      favorites.forEach(fav =>{
        if(product.id === fav.id){
          bool = true;
        }
      })
    return bool;
  }
  
  return (
    <div className="products-box">
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={36}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.products-next-btn',
          prevEl: '.products-back-btn',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DailyRoutine dailyDetails ={daily}/>
        </SwiperSlide>
         
        {state?.map((product, index) => (
          <SwiperSlide key={index}>
            <Product productDetails = {product} />
          </SwiperSlide> 
        ))}
      </Swiper>
    </div>
  )
}

>>>>>>> 659ff1546195ba73f5ae4e7d241f07029f17dfc2
export default ResultProductsList