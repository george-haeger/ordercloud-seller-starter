import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
    e.preventDefault();
    //call api
        fetch('/api/auth', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            username,
            password,
            }),
            })
            .then((r) => {
            return r.json();
            })
            .then((data) => {
            if (data && data.error) {
                setLoginError(data.message);
            }
            if (data && data.token) {
            //set cookie
                cookie.set('token', data.token, {expires: 2});
                Router.push('/');
            }
        });
    }
    return (
    <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        />
        <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
        {loginError && <p style={{color: 'red'}}>{loginError}</p>}
    </form>
    );
};

export default Login;