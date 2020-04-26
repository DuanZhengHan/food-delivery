import React from 'react'
import RestaurantBanner from '../../Components/RestaurantBanner/RestaurantBanner'
import MenuLists from '../../Components/MenuLists/MenuLists'
import { menuLists } from '../../DummyData/menuLists';

function Restaurant() {
    return (
        <main className='Restaurant'>
            <RestaurantBanner />
            <MenuLists menuLists={menuLists} />
        </main>
    )
}

export default Restaurant
