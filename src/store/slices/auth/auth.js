import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/users';

const initialState = {
  username: '',
  email: '',
  password: '',
  password_check: '',
  tokens: []
}

export const registerUserAsync = createAsyncThunk('auth/registerUserAsync', async (authData) => {
  try {
    const { password, password_check } = authData;
    const response = await axios.post(`${API}/register/`, authData);
    localStorage.setItem('password', password)
    localStorage.setItem('password_check', password_check)
    return response.data;
  } catch (error) {
    throw error; 
  }
});

export const loginUserAsync = createAsyncThunk('auth/loginUserAsync', async (authData) => {
  try {
    const { username, password, notify } = authData;
    const response = await axios.post(`${API}/login/`, { username, password });
    notify()
    console.log(response.data);
    localStorage.setItem('token', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error; 
  }
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  let token = JSON.parse(localStorage.getItem('token'));
  try {
      const Authorization = `Bearer ${token.access}`; //JWT
      let response = await axios.post(`${API}/token/refresh/`,
       { refresh: token.refresh }, 
       { headers: { Authorization } });
      localStorage.setItem('token', JSON.stringify({ refresh: token.refresh, access: response.data.access }));
  } catch (error) {
      console.log('Error', error);
  };
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
      state.username = action.payload;
      state.email = action.payload;
      state.password = action.payload;
      state.password_check = action.payload;
    })
    .addCase(loginUserAsync.fulfilled, (state, action) => {
      state.tokens.push(action.payload);
      toast.success('Hello');
    }) }
})

export const { setNameEmail } = authSlice.actions
export default authSlice.reducer