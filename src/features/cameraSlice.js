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

export const selectImage = state => state.camera.img;

export default cameraSlice.reducer;
