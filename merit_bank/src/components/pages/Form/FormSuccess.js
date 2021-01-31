import React from 'react';
import './Form.css';
import { Link } from "react-router-dom";

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'>LOGIN SUCCESSFUL!</h1>

            <img className='form-img-2' src='images/undraw_welcome_3gvl.svg' alt='success-image' />

            <Link to="/dashboard">
            <button className="form-input-btn-success" type='submit'> Enter Dashboard </button>
            </Link>
        </div>
    );
};

export default FormSuccess;
