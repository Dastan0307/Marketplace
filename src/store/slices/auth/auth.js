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
    notify()
    console.log('hello');
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