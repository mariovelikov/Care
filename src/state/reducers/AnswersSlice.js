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
export default answers.reducer