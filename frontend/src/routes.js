import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import Login from './pages/Login';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/user/new" exact element={<CreateUser/>} />
                <Route path="/home" exact element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;