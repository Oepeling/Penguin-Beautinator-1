import PropTypes from "prop-types";

const Menu = (props) => {
    return (
        < div;
    className = {'Menu'} >
        {props.salon.src !== '' && < img src = {props.salon.src} className = {'Logo'} alt = {'Salon logo'};
    />}
    {
        Object.keys(props.sections).map(key =>
            props.hasContent(key, props.salon) && < h3 > {props.sections[key]} < /h3>
        )
    }
<
    /div>;
)
};

Menu.propTypes = {
    sections: PropTypes.objectOf(PropTypes.string).isRequired,
    salon: PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        program: PropTypes.array.isRequired,
        phone: PropTypes.array.isRequired,
        email: PropTypes.array.isRequired,
        address: PropTypes.string.isRequired
    }).isRequired
};

export default Menu;