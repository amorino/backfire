import React, {Component, PropTypes} from 'react';
import ImageLoader from 'react-imageloader';
import Image from '../utils/Image';

class ItemDetail extends Component {

    render() {
        const {item} = this.props;

        function preloader() {
            return <p>
                Loading
            </p>;
        }

        return (
            <div>
                Title:
                {item.title}
                <br/>
                Description:
                {item.description}
                <br/>
                <Image src={item.image} />
                <ImageLoader src={item.image} preloader={preloader}>Image load failed!</ImageLoader>
            </div>
        );
    }
}

export default ItemDetail;
