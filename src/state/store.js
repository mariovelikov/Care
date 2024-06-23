<<<<<<< HEAD
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import QuestionsSlice from './reducers/QuestionsSlice'
import AnswersSlice from './reducers/AnswersSlice'
import ProductSclice from './reducers/ProductSclice'

const root = combineReducers({
    questions: QuestionsSlice,
    answers: AnswersSlice,
    products: ProductSclice
})

const store = configureStore({
    reducer: root
})

=======
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import QuestionsSlice from './reducers/QuestionsSlice'
import AnswersSlice from './reducers/AnswersSlice'
import ProductSclice from './reducers/ProductSclice'

const root = combineReducers({
    questions: QuestionsSlice,
    answers: AnswersSlice,
    products: ProductSclice
})

const store = configureStore({
    reducer: root
})

>>>>>>> 659ff1546195ba73f5ae4e7d241f07029f17dfc2
export default store