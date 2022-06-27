import React from 'react'
import Slider from 'react-slick'

import TopUserItem from '../UserItem'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FeedbackText } from './styles'

import { IUsersList } from '../../Types/components/Users'

const TopUserList: React.FC<IUsersList> = ({ 
    items, 
    className, 
    classNameItem, 
    itemsPerRow, 
    rows, 
    loading,
    onClickItem
}) => {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: window.screen.width <= 1024 ? 1 : itemsPerRow || 4,
        slidesToScroll: 1,
        draggable: true,
        className: `slick_carousel ${className}`,
        rows: rows || 1,
        adaptiveHeight: true
    }

    if (loading) {
        return (
            <FeedbackText>
                Loading...
            </FeedbackText>
        )
    }

    if (!loading && items.length === 0) {
        return (
            <FeedbackText>
                Nothing was found!
            </FeedbackText>
        )
    }

    return (
        <Slider {...settings}>

            {
                items.map(item => (
                    <TopUserItem 
                    key={item.login} 
                    className={classNameItem} 
                    onClickItem={onClickItem}
                    {...item} />
                ))
            }
        </Slider>
    )
}

export default TopUserList