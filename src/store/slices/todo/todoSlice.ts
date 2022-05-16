import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  value: number;
}

const initialState: TodoState = {
  value: 0,
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = TodoSlice.actions;

export default TodoSlice.reducer;
