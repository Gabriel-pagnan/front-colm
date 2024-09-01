import { Routes, Route, Navigate, RouteProps } from 'react-router-dom';
import { Home } from '../pages/Home';
import Register from '../pages/Register';
import { User } from '../pages/User';
import { Questionary } from '../pages/Questionary';
import { NotFound } from '../pages/NotFound';
import { Departments } from '../pages/Department';
import { useAuthContext } from '../shared/context/AuthContext';
import Result from '../pages/Result';

const ProtectedRoute: React.FC<RouteProps> = ({ element }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <>{element}</>;
};

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/department' element={<Departments />} />
            <Route path='/questionary' element={<Questionary />} />
            <Route path='/user' element={<User />} />
            <Route path='/result' element={<Result />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};