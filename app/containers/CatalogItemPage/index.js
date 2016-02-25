import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import styles from './styles';

class App extends Component {
  render() {
    const id = this.props.params.id;
    return (
      <div className={styles.catalog_page}>
        <div className={styles.wrapper}>
          <h1>Detail</h1>
          <Item id={id} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {id: props.params.id, filter: props.location.query.filter};
}

export default connect(mapStateToProps)(App);
