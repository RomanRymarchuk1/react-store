import React from 'react';
import Card from '../Card/Card';

import "./FavoriteList.scss"

import { useSelector } from 'react-redux';


const FavoriteList = () => {

    const data = useSelector((state => state.data.data))
    const favorite = useSelector((state => state.favorite.favorite))

    const result = data.filter(el => favorite.includes(el.article))


    return (
        <section>
            <ul className='favorite-list' >
                {result.map(el => <Card isFavorite={JSON.parse(localStorage.getItem("favorite").includes(el.article))} key={el.article} card={el} />)}
            </ul>
        </section>
    );
}

export default FavoriteList;
