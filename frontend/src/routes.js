import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>} />
                {/* <Route path="/room/:roomId" exact component={MainPage} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;