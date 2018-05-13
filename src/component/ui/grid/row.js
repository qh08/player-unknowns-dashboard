import React from 'react';
import PropTypes from 'prop-types';

import style from '@/style/grid.less';

const row = props => {

    const cols = React
        .Children
        .map(props.children, (col) => {
            return col;
        });

    return (
        <div className={style['qh-row']}>{cols}</div>
    );
};

row.propTypes = {};

export default row;