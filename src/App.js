import { Routes, Route } from 'react-router-dom';
import Register from "./screens/Auth/Register/Register";
import Password from './screens/Auth/CreatePassword/Password';
import Login from './screens/Auth/Login/Login';
import ProfilePage from './screens/ProfilePage/ProfilePage';
import ProfileLiked from './screens/ProfileLiked/ProfileLiked';
import Main from './screens/Main/Main';
import EditCard from './screens/UpdateCard/EditCard';
import CardShow from './components/Card/CardShow';
import MyProducts from './screens/MyProducts/MyProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile_liked" element={<ProfileLiked />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/edit-card/:id" element={<EditCard />} />
        <Route path="/show-card/:id" element={<CardShow />} />
      </Routes>
    </div>
  );
}

export default App;
