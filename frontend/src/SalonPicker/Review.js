import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import PropTypes from 'prop-types';

const Stars = (props) => {
    return (
        <div className={'Stars'}>
            {[1, 2, 3, 4, 5].map(index =>
                index <= props.noFullStars ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>
            )}
        </div>
    )
}

Stars.propTypes = {
    noFullStars: PropTypes.number.isRequired
}

const PriceRange = (props) => {
    return (
        <p className={'PriceRange'}>
            {[1, 2, 3, 4, 5].map((index) =>
                index <= props.noDollars ? '$' : ''
            )}
        </p>
    )
}

PriceRange.propTypes = {
    noDollars: PropTypes.number.isRequired
}

const Review = (props) => {
    const noReviews = props.noReviews === 0 ? 'Niciun review momentan' :
        props.noReviews === 1 ? '1 review' : props.noReviews + 'reviews';
    return (
        <div className={'Review'}>
            <Stars noFullStars={props.noFullStars}/>
            <p>{noReviews}</p>
            <PriceRange noDollars={props.noDollars}/>
        </div>
    )
}

Review.propTypes = {
    noFullStars: PropTypes.number.isRequired,
    noReviews: PropTypes.number.isRequired,
    noDollars: PropTypes.number.isRequired
}

export default Review;
