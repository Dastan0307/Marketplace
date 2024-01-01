import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/goods';

const initialState = {}


export const updateUserProfile = createAsyncThunk('product/updateUserProfile', async (updateDate) => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
    //   const { name, last_name, birth_date, addProfileClose } = updateDate;
      const response = await axios.post(`${API}/profile/`, 
      updateDate,
      { headers: { Authorization } });
      return response.data;
    } catch (error) {
      throw error; 
    }
});


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    //   builder
    //   .addCase(.fulfilled, (state, action) => {}) 
    }})
  
  export const {  } = productSlice.actions
  export default productSlice.reducer