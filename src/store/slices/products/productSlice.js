import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/goods';

const initialState = {
    products: [],
    about_product: [],
    my_products: [],
}


export const addProduct = createAsyncThunk('product/addProduct', async (addProduct) => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const response = await axios.post(`${API}/product/`, 
      addProduct,
      { headers: { Authorization } });
      return response.data;
    } catch (error) {
      throw error; 
    }
});

export const getProduct = createAsyncThunk('product/getProduct', async () => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const response = await axios.get(`${API}/products_all/`, { headers: { Authorization } });
      return response.data;
    } catch (error) {
      throw error; 
    }
});

export const getMyProducts = createAsyncThunk('product/getMyProducts', async () => {
  let token = JSON.parse(localStorage.getItem('token'));
try {
  const Authorization = `Bearer ${token.access}`; //JWT
  const response = await axios.get(`${API}/products_user/`, { headers: { Authorization } });
  return response.data;
} catch (error) {
  throw error; 
}
});

export const getProductId = createAsyncThunk('product/getProductId', async (id) => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const response = await axios.get(`${API}/product/${id}/`, { headers: { Authorization } });
      return response.data;
    } catch (error) {
      throw error; 
    }
});

export const editCardProduct = createAsyncThunk('product/getProductId', async (id) => {
  let token = JSON.parse(localStorage.getItem('token'));
try {
  const Authorization = `Bearer ${token.access}`; //JWT
  const response = await axios.patch(`${API}/product/${id}/`, 
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
      builder
      .addCase(addProduct.fulfilled, (state, action) => {
        toast.success('Продукт успешно добавлен')
      }) 
      .addCase(addProduct.rejected, (state, action) => {
        toast.error('Продукт не добавлен')
      }) 
      .addCase(getProduct.fulfilled, (state, action) => {
        state.products = action.payload
      }) 
      .addCase(getProduct.rejected, (state, action) => {
        toast.warning('Ошибка с сервера, продукты не получены')
      }) 
      .addCase(getProductId.fulfilled, (state, action) => {
        state.about_product = action.payload
      }) 
      .addCase(getMyProducts.fulfilled, (state, action) => {
        state.my_products = action.payload
      }) 
    }})
  
  export const {  } = productSlice.actions
  export default productSlice.reducer