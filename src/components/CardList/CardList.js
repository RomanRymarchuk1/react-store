import React from 'react';
import Card from '../Card/Card';
import "./CardList.scss"

import { shallowEqual, useSelector } from "react-redux"



const CardList = () => {

    const data = useSelector((state => state.data.data), shallowEqual)
    const favorite = useSelector((state => state.favorite.favorite), shallowEqual)

    return (
        <section>
            <ul className='card-list'>
                {data.map((el) => <Card isFavorite={favorite.includes(el.article)} key={el.article} card={el} />)}
            </ul>
        </section>
    )
}

export default CardList