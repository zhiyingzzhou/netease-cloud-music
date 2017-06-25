import React from 'react';
import {Route, IndexRoute } from 'react-router'

export default () => {
    return (
        <Route path="/" component={require('../App.js').default}>
            <IndexRoute component={require('pages/index').default} />
        </Route>
    )
}