import React, {PropTypes, Component} from 'react';
import MenuListItem from './MenuListItem';
import {VelocityTransitionGroup} from 'velocity-react'

const menuItems = [
    {
        text: 'Home',
        link: '/'
    }, {
        text: 'About',
        link: '/about'
    }, {
        text: 'Amorino',
        link: '/users/amorino'
    }, {
        text: 'Items',
        link: '/items'
    }
];

export default class Menu extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render () {
        let items = menuItems.map((item, i) => <MenuListItem {...item} key={i}/>);
        return (
            <div id="menu" ref="menu">
                <VelocityTransitionGroup component='ul' enter={{
                animation: 'slideDown', duration: 400, delay: 500
                }} leave={{
                animation: 'slideUp', duration: 400
                }} runOnMount={true}>
                    {items}
                </VelocityTransitionGroup>
            </div>
        )
    }
}
