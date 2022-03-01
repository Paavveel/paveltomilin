import { createSlice } from '@reduxjs/toolkit';

const globalReducer = createSlice({
  name: 'global',
  initialState: {
    currentTheme:
      localStorage.getItem('theme') === null
        ? 'light'
        : localStorage.getItem('theme'),
  },
  reducers: {
    changeTheme(state, action) {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = globalReducer.actions;
export default globalReducer.reducer;
