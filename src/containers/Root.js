import React, {Component, PropTypes} from 'react'
import {Router, Route} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import {ReduxRouter} from 'redux-router'

const store = configureStore()

export default class Root extends Component {
    render () {
        return(
            <Provider store={store}>
                <ReduxRouter/>
            </Provider>
        );
    }
}
