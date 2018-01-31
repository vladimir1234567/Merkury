import React, { Component } from 'react';
import _map from 'lodash/map';

import { Link } from 'react-router-dom';

class Ul extends Component {
    render() {
        return (
            <ul className="listMainMenu">
                    {
                        _map(this.props.ololo, (item, index) => (
                            <Link
                                key={item.text + index}
                                className={`itemMainMenu ${item.className}`}
                                to={item.link}>
                                {item.text} {item.isActive && ' (active)'}
                            </Link>
                        ))
                    }

            </ul>
        )
    }
}

export default Ul;