import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/users';

const initialState = {
  name: '',
  last_name: '',
  birth_date: ''
}

export const updateUserProfile = createAsyncThunk('profile/updateUserProfile', async (updateDate) => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const { name, last_name, birth_date, addProfileClose } = updateDate;
      const response = await axios.post(`${API}/profile/`, 
      updateDate,
      { headers: { Authorization } });
      localStorage.setItem('name', name);
      localStorage.setItem('last_name', last_name);
      localStorage.setItem('birth_date', birth_date);
      addProfileClose();
      return response.data;
    } catch (error) {
      throw error; 
    }
});



export const editProfile = createAsyncThunk('profile/editProfile', async (updateDate) => {
      let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`; //JWT
      const { name, last_name, birth_date, editProfileClose } = updateDate;
      const response = await axios.patch(`${API}/profile/`, 
      updateDate,
      { headers: { Authorization } });
      localStorage.setItem('name', name);
      localStorage.setItem('last_name', last_name);
      localStorage.setItem('birth_date', birth_date);
      editProfileClose();
      return response.data;
    } catch (error) {
      throw error; 
    }
});


const profileSlices = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        toast.success('Вы успешно добавили профиль ');
        state.name = action.payload;
        state.last_name = action.payload;
        state.birth_date = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        toast.error('Данные не были добавлены');
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        toast.success('Вы успешно изменили профиль');
        state.name = action.payload;
        state.last_name = action.payload;
        state.birth_date = action.payload;
      })
      .addCase(editProfile.rejected, (state, action) => {
        toast.error('Данные не были добавшены изменены');
      })
  }})
  
  // export const {  } = profileSlices.actions
  export default profileSlices.reducer