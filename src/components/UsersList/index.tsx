import React from 'react'
import Slider from 'react-slick'

import TopUserItem from '../UserItem'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IUsersList } from '../../Types/components/Users'

const TopUserList: React.FC<IUsersList> = ({ items, className, classNameItem, itemsPerRow, rows }) => {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: window.screen.width <= 767 ? 1 : itemsPerRow || 4,
        slidesToScroll: 1,
        draggable: true,
        className: `slick_carousel ${className}`,
        rows: rows || 1,
        adaptiveHeight: true
    }

    return (
        <Slider {...settings} rtl >
            {
                items.map(item => (
                    <TopUserItem key={item.login} className={classNameItem} {...item} />
                ))
            }
        </Slider>
    )
}

export default TopUserList