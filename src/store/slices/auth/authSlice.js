import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const API = 'https://kunasyl-backender.org.kg/users';

const initialState = {
  username: '',
  email: '',
  password: '',
  password_check: '',
  phone_number: '',
  tokens: []
}

export const registerUserAsync = createAsyncThunk('auth/registerUserAsync', async (authData) => {
  try {
    const { password, navigate, showToastMessage } = authData;
    const response = await axios.post(`${API}/register/`, authData);
    localStorage.setItem('password', password)
    showToastMessage();
    setTimeout(() => {
      navigate('/login')
    }, 4000);
    return response.data;
  } catch (error) {
    localStorage.clear();
    throw error; 
  }
});

export const loginUserAsync = createAsyncThunk('auth/loginUserAsync', async (authData) => {
  try {
    const { username, password, showToastMessage, navigate } = authData;
    const response = await axios.post(`${API}/login/`, { username, password });
    showToastMessage();
    setTimeout(() => {
      navigate('/profile')
    }, 4000);
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

export const addNumberUser = createAsyncThunk('auth/addNumberUser', async (phone_number) => {
  let token = JSON.parse(localStorage.getItem('token'));
  try {
    const Authorization = `Bearer ${token.access}`;
    const response = await axios.post(`${API}/add_phone_number/`, 
    { phone_number }, 
    { headers: { Authorization } });
    localStorage.setItem('phone_number', phone_number);
    return response.data;
  } catch (error) {
    throw error; 
  }
});

export const sendCode = createAsyncThunk('auth/senCode', async (code_activation) => {
  try {
    console.log(code_activation);
    const response = await axios.post(`${API}/activate_phone_number/`, { code_activation });
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
      state.phone_number = action.payload;
    })
    .addCase(registerUserAsync.rejected, (state, action) => {
      toast.error('Данный пользователь уже зарегистрирован');
    })
    .addCase(loginUserAsync.fulfilled, (state, action) => {
      state.tokens.push(action.payload);
    })
    .addCase(loginUserAsync.rejected, (state, action) => {
      toast.error('Неверный логин или пароль');
    }) }
})

export const { setNameEmail } = authSlice.actions
export default authSlice.reducer