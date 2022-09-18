import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import FavoriteList from '../../components/FavoriteList/FavoriteList';



const FavoritePage = () => {
    const favorite = useSelector((state => state.favorite.favorite), shallowEqual)

    if (favorite.length) {

        return <FavoriteList />

    }

    return <h1>No items</h1>
}

export default FavoritePage;
