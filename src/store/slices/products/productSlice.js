import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/goods';

const initialState = {
    id: null,
    title: '',
    price: '',
    photo: [],
    short_description: '',
    long_description: '',
    likes: [],
    all_likes: ''
}


export const addProduct = createAsyncThunk('product/addProduct', async (updateDate) => {
      let token = JSON.parse(localStorage.getItem('token'));
      const { title, price, photo, short_description, long_description, likes } = updateDate;
      let formData = new FormData();
      formData.append('title', title);
      formData.append('price', price);
      formData.append('photo', photo[0]);
      formData.append('short_description', short_description);
      formData.append('long_description', long_description);
      formData.append('likes', likes);
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const response = await axios.post(`${API}/product/`, 
      formData,
      { headers: { Authorization } });
      console.log("Succes");
      return response.data;
    } catch (error) {
      throw error; 
    }
});

// export const getProduct = createAsyncThunk('product/getProduct', async () => {
//     let token = JSON.parse(localStorage.getItem('token'));
//   try {
//     const Authorization = `Bearer ${token.access}`; //JWT
//     const response = await axios.get(`${API}/product/`,{ headers: { Authorization } });
//     console.log("Succes");
//     return response.data;
//   } catch (error) {
//     throw error; 
//   }
// });


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
        toast.error('Продукт не добавлен !')
      }) 
    //   .addCase(getProduct.fulfilled, (state, action) => {
    //     state.id = action.payload
    //     state.title = action.payload
    //     state.price = action.payload
    //     state.photo.push(action.payload)
    //     state.short_description = action.payload
    //     state.long_description = action.payload
    //     state.likes.push(action.payload)
    //     state.all_likes = action.payload
    //   }) 
    //   .addCase(getProduct.rejected, (state, action) => {
    //     toast.warning('Ошибка с сервера, продукты не получены')
    //   }) 
    }})
  
  export const {  } = productSlice.actions
  export default productSlice.reducer