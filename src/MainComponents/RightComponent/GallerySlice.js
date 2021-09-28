import { createSlice } from '@reduxjs/toolkit'
import recipeData from '../../../public/data.json'
import { NO_OF_IMAGES } from '../../CONST'

const initialState = {
  pages: Math.ceil(recipeData.images.length / NO_OF_IMAGES),
  currentPage: 1,
  images: recipeData.images
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    reset: (state) => {
      state.pages = 1
      state.currentPage = 1
      state.images = []
    },
    setImageData: (state, action) => {
      state.images = action.payload
      state.pages = Math.ceil(action.payload.length / NO_OF_IMAGES)
      state.currentPage = 1
    },
    sesetImageDatatCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  }
})

export const { reset, setImageData, setCurrentPage } = gallerySlice.actions

export const selectPages = (state) => state?.gallery?.pages
export const selectCurrentPage = (state) => state?.gallery?.currentPage
export const selectImages = (state) => state?.gallery?.images

export default gallerySlice.reducer
