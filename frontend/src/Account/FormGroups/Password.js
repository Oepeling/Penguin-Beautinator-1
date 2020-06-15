import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const Password = (props) => {
    return (
        <Form.Group>
            <Form.Label>Parola</Form.Label>
            <Form.Control type='password'
                          name='password'
                          value={props.password}
                          onChange={props.handleChange}
                          placeholder='Enter your password'/>
        </Form.Group>
    )
}

Password.propTypes = {
    password: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Password;
