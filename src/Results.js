import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Results.css'
import background from './media/result-background.png'
import { Link } from "react-router-dom";
import ResultProductsList from './components/ResultProductsList';
import { fetchData } from './state/reducers/ProductSclice';


function Results() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  const answers = useSelector(state => state.answers)
  const [filteredProducts, setFilteredProducts] = useState([])
  const daily = {
    title: "Daily routine",
    text: "Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day."
  }


  useEffect(() => {
    if(!products){
      dispatch(fetchData());
    }else{
      setFilteredProducts([...filterProducts()]);
    }
  }, [products])

  const filterProducts = () => {
    const answersList = Object.values(answers).map((opt) => Object.values(opt)[0].toLowerCase() );
    const data = products?.filter((product) => {
      for(let i = 0; i < answersList.length; i ++){
        if(product['title'].toLowerCase().includes(answersList[i]) || product['body_html'].toLowerCase().includes(answersList[i]) || product['tags'].toString().toLowerCase().includes(answersList[i])){
          return product
        }
      }
    })
    
    return data
  }

  return (
    <div className='result-box'>
      <div className='result-page'>
          <div className='result-page-background-img'>
              <img src={background} alt='result-background'/>
          </div>
          <div className="inscriptions">
              <div className='bigger-text'>
                  <p>Build you everyday self care routine.</p>
              </div>
              <div className='little-text'>
                  <p>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
              </div>
              <Link to={'/quiz'}><button className='retake-quiz'><span>Retake the quiz</span></button></Link>
          </div>
      </div>
      {filteredProducts.length > 1 ? <ResultProductsList products = {filteredProducts} daily={daily}/> : <ResultProductsList daily ={daily} />}
      <div className="products-back-btn"><ion-icon name="chevron-back-outline"></ion-icon></div>
      <div className="products-next-btn"><ion-icon name="chevron-forward-outline"></ion-icon></div>
    </div>
  )
}

export default Results