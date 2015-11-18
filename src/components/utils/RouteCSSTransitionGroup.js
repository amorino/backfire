import React from 'react'
import {render} from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import StaticContainer from 'react-static-container'

export default class RouteCSSTransitionGroup extends React.Component {
    static contextTypes = {
        location: React.PropTypes.object
    }

    constructor (props, context) {
        super(props, context);

        this.state = {
            previousPathname: null
        }
    }

    componentWillReceiveProps (nextProps, nextContext) {
        if(nextContext.location.pathname !== this.context.location.pathname) {this.setState({previousPathname: this.context.location.pathname})}
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
            <ReactCSSTransitionGroup {...props}>
                <StaticContainer key={previousPathname || this.context.location.pathname} shouldUpdate={!previousPathname}>
                    {children}
                </StaticContainer>
            </ReactCSSTransitionGroup>
        )
    }

    componentDidUpdate () {
        if(this.state.previousPathname) {this.setState({previousPathname: null})}
    }
}
