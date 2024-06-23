<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState ={}

const answers = createSlice({
    name: "answers", 
    initialState, 
    reducers: {
        addAnswer(state, action){
            state = {...state, [action.payload.questionId]: {
                [action.payload.option]: action.payload.optionText }
            }
            return state
        }
    }
})

export const {addAnswer} = answers.actions 
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState ={}

const answers = createSlice({
    name: "answers", 
    initialState, 
    reducers: {
        addAnswer(state, action){
            state = {...state, [action.payload.questionId]: {
                [action.payload.option]: action.payload.optionText }
            }
            return state
        }
    }
})

export const {addAnswer} = answers.actions 
>>>>>>> 659ff1546195ba73f5ae4e7d241f07029f17dfc2
export default answers.reducer