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

export default store