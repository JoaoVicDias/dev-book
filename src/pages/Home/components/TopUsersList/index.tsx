import React from 'react'
import Slider from 'react-slick'

import TopUserItem from '../TopUserItem'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ITopSalesList } from '../../../../Types/Home'

const TopUserList: React.FC<ITopSalesList> = ({ items }) => {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: window.screen.width <= 767 ? 1 : 3,
        slidesToScroll: 1,
        draggable: true,
        className: 'slick_carousel',
    }

    return (
        <Slider {...settings}   >
            {
                items.map(item => (
                    <TopUserItem key={item.login} {...item} />
                ))
            }
        </Slider>
    )
}

export default TopUserList