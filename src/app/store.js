import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../MainComponents/counter/counterSlice'
import galleryReducer from '../MainComponents/RightComponent/GallerySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gallery: galleryReducer
  }
})
