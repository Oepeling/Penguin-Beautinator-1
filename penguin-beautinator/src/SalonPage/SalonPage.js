import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu.js';
import Content from './Content';
import './SalonPage.css';

const SalonPage = (props) => {
    return (
        <article className={'SalonPage'}>
            <Menu sections={props.sections} logo={props.salon.src}/>
            <div className={'VerticalLine'}/>
            <Content sections={props.sections} salon={props.salon} services={props.services}/>
        </article>
    )
}

SalonPage.propTypes = {
    sections: PropTypes.objectOf(PropTypes.string).isRequired,
    salon: PropTypes.shape({
        src: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        images: PropTypes.array,
        program: PropTypes.array.isRequired,
        phone: PropTypes.array.isRequired,
        email: PropTypes.array.isRequired,
        address: PropTypes.string.isRequired
    }).isRequired,
    services: PropTypes.objectOf(PropTypes.array).isRequired
}

export default SalonPage;
