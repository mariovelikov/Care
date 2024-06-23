<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState =
[
    {
      id: 1, 
      question: "What's your hair type or texture?",
      a: "Straight",
      b: "Curly",
      c: "Wavy", 
      d: "Fine"
    },
    {
      id: 2, 
      question: "How often do you wash your hair?",
      a: "Daily",
      b: "Every other day",
      c: "Twice a week", 
      d: "Once a week",
      e: "Once every two weeks"
    },
    {
      id: 3, 
      question: "What benefit do you look for in your hair products?",
      a: "Anti-breakage",
      b: "Hydration",
      c: "Soothing dry scalp", 
      d: "Repairs the appearance of damaged hair",
      e: "Volume", 
      f: "Curl and coil enhancing."
    }, 
    {
      id: 4, 
      question: "Is there anything troubling you about your hair?",
      a: "Breakage",
      b: "Frizz",
      c: "Scalp dryness", 
      d: "Damage",
      e: "Tangling", 
    },
    {
      id: 5, 
      question: "What is your natural hair color(s) today?",
      a: "Black",
      b: "Brown",
      c: "Blonde", 
      d: "Red/Orange",
      e: "Silver/Grey", 
    }, 
  ];

const questions = createSlice({
    name: "questions", 
    initialState, 
    reducers: {
      
    }
})

=======
import { createSlice } from "@reduxjs/toolkit";

const initialState =
[
    {
      id: 1, 
      question: "What's your hair type or texture?",
      a: "Straight",
      b: "Curly",
      c: "Wavy", 
      d: "Fine"
    },
    {
      id: 2, 
      question: "How often do you wash your hair?",
      a: "Daily",
      b: "Every other day",
      c: "Twice a week", 
      d: "Once a week",
      e: "Once every two weeks"
    },
    {
      id: 3, 
      question: "What benefit do you look for in your hair products?",
      a: "Anti-breakage",
      b: "Hydration",
      c: "Soothing dry scalp", 
      d: "Repairs the appearance of damaged hair",
      e: "Volume", 
      f: "Curl and coil enhancing."
    }, 
    {
      id: 4, 
      question: "Is there anything troubling you about your hair?",
      a: "Breakage",
      b: "Frizz",
      c: "Scalp dryness", 
      d: "Damage",
      e: "Tangling", 
    },
    {
      id: 5, 
      question: "What is your natural hair color(s) today?",
      a: "Black",
      b: "Brown",
      c: "Blonde", 
      d: "Red/Orange",
      e: "Silver/Grey", 
    }, 
  ];

const questions = createSlice({
    name: "questions", 
    initialState, 
    reducers: {
      
    }
})

>>>>>>> 659ff1546195ba73f5ae4e7d241f07029f17dfc2
export default questions.reducer