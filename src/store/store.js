import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import profileReducer from './slices/profile/profileSlice';
import productReducer from './slices/products/productSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    product: productReducer,
  },
});