import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: 'light' };

function updateTheme(state, action) {
  state.theme = action.payload;
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateTheme,
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
