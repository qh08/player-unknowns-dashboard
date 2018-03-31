import React from 'react';
import PropTypes from 'prop-types';

const col = props => {

    const contents = React
        .Children
        .map(props.children, (content) => {
            return content;
        })

    return (
        <div>
            {contents}
        </div>
    );
};

col.propTypes = {
    span: function (props, propName, componentName) {
        console.dir(props);
        console.dir(propName);
        console.dir(componentName);
    }
};

export default col;