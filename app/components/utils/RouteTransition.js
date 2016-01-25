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
      {item => <div>
        {Object.keys(item).map(key => <div key={`${key}-transition`} style={{
          position: 'absolute',
          opacity: item[key].opacity,
          WebkitTransform: `translate3d(0, ${item[key].x}px, 0)`,
          transform: `translate3d(0, ${item[key].x}px, 0)`
        }}>
          {item[key].children}
        </div>)}
      </div>}
    </TransitionMotion>
  );
}
