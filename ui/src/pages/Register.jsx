import React, { useState, } from 'react'
import { Endpoints, } from '../api'
import Errors from '../components/Errors'
import PropTypes from 'prop-types';


const Register = ({ history }) => {
    const [user, setUser, ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },)

    const [isSubmitting, setIsSubmitting, ] = useState(false,)
    const [errors, setErrors, ] = useState([],)
    const { name, email, password, confirmPassword } = user

    const handleChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value, },)

    const handleSubmit = async (e) => {
    e.preventDefault();
        if (password !== confirmPassword) {
            setErrors(['Passwords don\'t match!']);
            return;
        }
        try {
            setIsSubmitting(true);
            const res = await fetch(Endpoints.register, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    name,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { success, errors = [] } = await res.json();
            if (success) {
                history.push('/login');
            } else {
                setErrors(errors);
            }
            
        } catch (error) {
            setErrors([error.toString()]);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="wrapper">
                <h1>Register</h1>
                <input
                    className="input"
                    type="name"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    required
                />
                <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    required
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    required
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                />
                <button disabled={isSubmitting}>
                    {isSubmitting ? '.....' : 'Sign Up'}
                </button>
                <br />
                <a href="/login">{'login'}</a>
                <br />
                <Errors errors={errors} />
            </div>
        </form>
    )
}

Register.propTypes = {
    history: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
};

export default Register