import React, {PropTypes, Component} from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/sections/Footer'
import {connect} from 'react-redux'
import RouteCSSTransitionGroup from '../components/utils/RouteCSSTransitionGroup'
import GSAPTransitionGroup from '../components/utils/GSAPTransitionGroup'
import {VelocityTransitionGroup} from 'velocity-react'

class App extends Component {

    static propTypes = {
        children: PropTypes.any
    }

    constructor (props, context) {super(props, context);}

    render () {
        const {
            pathname
        } = this.props.location;
        const key = pathname.split('/') || 'root';
        const element = this.props.children || <div/>;
        const elementToAnimate = React.cloneElement(element, {key});
        return (
            <div id="layout">
                <Menu/>
                <VelocityTransitionGroup enter={{
                animation: 'slideDown', duration: 400, delay: 100
                }} leave={{
                animation: 'slideUp', duration: 400
                }} runOnMount={true}>
                    {elementToAnimate}
                </VelocityTransitionGroup>
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node
};

export default connect()(App);
