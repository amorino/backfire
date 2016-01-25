import React from 'react';
import {TransitionMotion, spring} from 'react-motion';

const willEnter = children => ({children, opacity: spring(0), x: spring(100)});
const willLeave = (key, {children}) => ({children, opacity: spring(0), x: spring(100)});
const getStyles = (children, pathname) => ({
  [pathname]: {
    children,
    opacity: spring(1),
    x: spring(0)
  }
});

export default function RouteTransition({children, pathname}) {
  return (
    <TransitionMotion styles={getStyles(children, pathname)} willEnter={willEnter} willLeave={willLeave}>
      {interpolated => <div>
        {Object.keys(interpolated).map(key => <div key={`${key}-transition`} style={{
          position: 'absolute',
          opacity: interpolated[key].opacity,
          transform: `translate3d(0, ${interpolated[key].x}px, 0)`
        }}>
          {interpolated[key].children}
        </div>)}
      </div>
}
    </TransitionMotion>
  );
}
