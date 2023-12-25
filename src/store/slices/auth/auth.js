import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/users';

const initialState = {
  username: '',
  email: '',
  password: '',
  password_check: ''
}

const showToastMessage = () => {
  toast.success("Success Notification !", {
    position: toast.POSITION.TOP_RIGHT,
  });
}

export const registerUserAsync = createAsyncThunk('auth/registerUserAsync', async (authData, { dispatch }) => {
  try {
    const response = await axios.post(`${API}/register/`, authData);
    console.log(authData);
    return response.data;
  } catch (error) {
    throw error; 
  }
});

export const loginUserAsync = createAsyncThunk('auth/loginUserAsync', async (authData) => {
  try {
    const { username, password, notify } = authData;
    const response = await axios.post(`${API}/login/`, { username, password });
    toast.success('вы вошли как: ' + response.data?.first_name)
    return response.data;
  } catch (error) {
    throw error; 
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNameEmail: (state, action) => {
      state.username = action.payload;
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerUserAsync.fulfilled, (state, action) => {
      console.log('Успешная регистрация:', action.payload);
    })
    .addCase(loginUserAsync.fulfilled, (state, action) => {
      // showToastMessage()
      console.log('Успешная регистрация:', action.payload);
    }) }
})

export const { setNameEmail } = authSlice.actions
export default authSlice.reducer