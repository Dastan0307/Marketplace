import { Routes, Route } from 'react-router-dom';
import Register from "./screens/Auth/Register/Register";
import Password from './screens/Auth/CreatePassword/Password';
import Layout from './components/Layout/Layout';
import Login from './screens/Auth/Login/Login';
import ProfilePage from './screens/ProfilePage/ProfilePage';
import ProfileLiked from './screens/ProfileLiked/ProfileLiked';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile_liked" element={<ProfileLiked />} />
      </Routes>
    </div>
  );
}

export default App;
