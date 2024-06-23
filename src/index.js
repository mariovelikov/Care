import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage';
import Results from './Results';
import Quiz from './Quiz';
import store from './state/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '',
    element: <HomePage/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/quiz',
    element: <Quiz/>,
    errorElement: <div>404 Not Found</div>,
  }, 
  {
    path: '/results', 
    element: <Results/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
