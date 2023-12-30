import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/users';

const initialState = {
  name: '',
  last_name: '',
  birth_date: ''
}


export const updateUserProfile = createAsyncThunk('profile/updateUserProfile', async (authData) => {
      let token = JSON.paccrse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const { name, last_name, birth_date } = authData;
      console.log(name);
      const response = await axios.post(`${API}/profile/`, 
      authData,
      { headers: { Authorization } });
      localStorage.setItem('name', name);
      localStorage.setItem('last_name', last_name);
      localStorage.setItem('birth_date', birth_date);

      return response.data;
    } catch (error) {
      localStorage.clear();
      throw error; 
    }
});


const profileSlices = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        toast.success('Вы успешно изменили профиль !');
        state.name = action.payload;
        state.last_name = action.payload;
        state.birth_date = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        toast.error('У вас не получилось изменить профиль !');
      })
  }})
  
  export const {  } = profileSlices.actions
  export default profileSlices.reducer