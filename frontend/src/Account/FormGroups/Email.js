import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const Email = (props) => {
    return (
        <div className={'group'}>
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus
                          type='email'
                          name='email'
                          placeholder='Enter email'
                          value={props.email}
                          onChange={props.handleChange}/>
        </div>
    )
}

Email.propTypes = {
    email: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Email;
