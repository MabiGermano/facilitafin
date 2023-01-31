import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import Login from './pages/Login';
import UserSettings from './pages/UserSettings';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/user/new" exact element={<CreateUser/>} />
                <Route path="/home" exact element={<Home/>} />
                <Route path="/profile-settings" exact element={<UserSettings/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;