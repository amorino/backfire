import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from 'styles/containers/CatalogItem';
import Footer from 'components/Footer';
import Detail from 'containers/CatalogItem/Detail';

class CatalogItem extends Component {
  PropTypes
  render() {
    const { id } = this.props;
    return (
      <div className={styles.container}>
        <h1>Detail</h1>
        <Detail id={id} />
        <Footer />
      </div>
    );
  }
}

CatalogItem.propTypes = {
  id: PropTypes.string,
};

function mapStateToProps(state, props) {
  return {
    id: props.params.id,
  };
}

export default connect(mapStateToProps)(CatalogItem);
