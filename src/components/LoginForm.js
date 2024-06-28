import React from 'react';
import InputField from './InputField';
import MainButton from './mainButton';
import './index.css';
import logo from '../image/logo.png'; // Adjust the path to point to the correct directory
import barangayImage from '../image/login.jpg'; // Adjust the path to point to the correct directory

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="image-section">
                <img src={barangayImage} alt="Barangay" />
            </div>
            <div className="form-section">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <form>
                    <InputField type="text" placeholder="Username" icon={<i className="fas fa-user"></i>} />
                    <InputField type="password" placeholder="Password" icon={<i className="fas fa-lock"></i>} />
                    <MainButton text="LOG-IN" />
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
