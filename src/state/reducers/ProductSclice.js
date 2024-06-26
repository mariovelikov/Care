import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    status: "pending"
}

const products = createSlice({
    name: "answers", 
    initialState, 
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.products = action.payload.products
            })
        }
})

export const fetchData = createAsyncThunk('products/fetchData', async () => {
    try {
        const response = fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
        const data = await (await response).json()
        
        return data
    } catch (e) {
        console.log(e.message);
    }
})

export default products.reducer