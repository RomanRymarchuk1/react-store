import { Routes, Route } from 'react-router-dom';
import StorePage from './pages/StorePage/StorePage';
import CartPage from './pages/CartPage/CartPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';


const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<StorePage />} />

            <Route path='/cart' element={<CartPage />} />

            <Route path='/favorite' element={<FavoritePage />} />

        </Routes>
    )
}

export default AppRoutes;