import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {oneOf} from '@/util/validation';
import {propsValidError} from '@/util/log';
import CONSTANT from '@/util/constant';

import style from '@/style/grid.less';

const screenTypes = ['xl', 'lg', 'md', 'sm', 'xs'];
const gridWidths = Array.from(Array(24), (v, i) => i + 1);

const col = props => {

    const contents = React
        .Children
        .map(props.children, (content) => {
            return content;
        });

    let sizeClassObj = {};

    screenTypes.forEach((type) => {
        sizeClassObj = {
            ...sizeClassObj,
            [style[`${CONSTANT.stylePrefix}-col-${type}-${props.span[type]}`]]: props.span[type] !== undefined
        }
    });

    const classes = classnames(sizeClassObj);

    return (
        <div className={classes}>
            {contents}
        </div>
    );
};

col.propTypes = {
    span: function (props, propName, componentName) {

        const span = props.span || {};

        const failedValidation = Object
            .keys(span)
            .some((key) => {
                return (!oneOf(key, screenTypes) || !oneOf(span[key], gridWidths));
            });

        if(failedValidation){
            return propsValidError(propName, componentName)
        }
    }
};

export default col;