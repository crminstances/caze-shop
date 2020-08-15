import React from "react"
import {Switch, Route} from "react-router-dom";

const ReactView = props => <Switch>{getRoutes(props.routes)}</Switch>;

const getRoutes = routes => {
    return routes.map((prop, key) => {
        return (
        <Route
            exact={key === 0}
            path={prop.path}
            render={props => <prop.component {...props}/>}
            key={key}
        />
        );
    });
};

export {
    getRoutes,
    ReactView
}