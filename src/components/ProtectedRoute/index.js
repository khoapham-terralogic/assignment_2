import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuth === true) {
                    return <Component {...props} />
                } else {
                    return (
                        <Redirect
                            data-testid="redirect"
                            to={{
                                pathname: "/auth/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
            }}
        >
        </Route>
    );
}

export default ProtectedRoute;
