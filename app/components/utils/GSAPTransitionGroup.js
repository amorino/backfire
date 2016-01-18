import React from 'react'
import ReactDOM, {render} from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import StaticContainer from 'react-static-container'
import TweenMax from 'gsap'

export default class RouteCSSTransitionGroup extends React.Component {
    static contextTypes = {
        location: React.PropTypes.object
    };

    constructor (props, context) {
        super(props, context);
        this.state = {
            previousPathname: null
        }
    }

    componentWillReceiveProps (nextProps, nextContext) {
        if(nextContext.location.pathname !== this.context.location.pathname) {this.setState({previousPathname: this.context.location.pathname})}
    }

    componentDidMount () {
        var node = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(node, 1, {
            x: -100
        }, {x: 0});
        // console.log(node);
        console.log('mount');
    }

    render () {
        const {
            children,
            ...props
        } = this.props;
        const {
            previousPathname
        } = this.state;
        return (
            <div>
                {children}
            </div>
        )
    }

    componentWillUnmount () {
        // console.log('unmount');
    }

    componentDidUpdate () {
        var node = ReactDOM.findDOMNode(this);
        if (this.state.previousPathname) {console.log('update', this.state);
            this.setState({previousPathname: null})
            TweenMax.fromTo(node, 1, {
                x: -100
            }, {x: 0});}
    }
}
