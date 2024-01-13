import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/goods';

const initialState = {
    products: [],
    about_product: [],
    my_products: [],
}


export const addProduct = createAsyncThunk('product/addProduct', async (dataProduct) => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const response = await axios.post(`${API}/product/`, 
      dataProduct,
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

export const editCardProduct = createAsyncThunk('product/editCardProduct', async ({ id, title, price,short_description, long_description, handleClose }) => {
  let token = JSON.parse(localStorage.getItem('token'));
try {
  const Authorization = `Bearer ${token.access}`; //JWT
  const response = await axios.patch(`${API}/product/${id}/`, 
  { title, price, short_description, long_description },
  { headers: { Authorization } });
  handleClose()
  return response.data;
} catch (error) {
  throw error; 
}
});

export const deleteCard = createAsyncThunk('product/deleteCard', async ({ closeDeleteCard, id }) => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const response = await axios.delete(`${API}/product/${id}/`, { headers: { Authorization } });
      closeDeleteCard()
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
        // state.products.push(action.payload)
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
      .addCase(editCardProduct.fulfilled, (state, action) => {
        toast.success('Продукт изменён')
      }) 
      .addCase(editCardProduct.rejected, (state, action) => {
        toast.error('Продукт не было изменён')
      }) 
      .addCase(deleteCard.fulfilled, (state, action) => {
        toast.success('Продукт уделён')
      }) 
      .addCase(deleteCard.rejected, (state, action) => {
        toast.warning('Продукт не удалён')
      }) 
    }})
  
  export const {  } = productSlice.actions
  export default productSlice.reducer