import React from 'react';
import PropTypes from 'prop-types';

const tableColumn = props => {
    return (
        <div>{props.label}</div>
    );
};

tableColumn.propTypes = {
    label: PropTypes.string.isRequired,
    prop: PropTypes.string.isRequired
};

export default tableColumn;