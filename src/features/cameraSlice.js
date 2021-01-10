import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    img: '',
  },
  reducers: {
    updateImage: (state, action) => {
      state.img = action.payload;
    },
    resetImage: (state) => {
        state.img = '';
    }
  },
});

export const { updateImage, resetImage } = cameraSlice.actions;

export const selectCount = state => state.app.value;

export default cameraSlice.reducer;
