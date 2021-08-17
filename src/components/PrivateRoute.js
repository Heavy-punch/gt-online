import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { userInfo } = useSelector((state) => state.auth);
    // const userInfoLocal = JSON.parse(localStorage.getItem("userInfo"))
    return (
        <Route
            {...rest}
            render={(props) =>
                userInfo ? (
                    <Component {...props}></Component>
                ) : (
                    <Redirect to="/auth/sign-in" />
                )
            }
        ></Route>
    );
}