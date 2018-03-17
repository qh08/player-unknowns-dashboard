import React from 'react';
import PropTypes from 'prop-types';

const game = ({ match }) => {
    return (
        <div>games:{match.params.id}</div>
    );
};

game.propTypes = {
    id: PropTypes.number
};

export default game;