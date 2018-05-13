import React from 'react';
import PropTypes from 'prop-types';

const table = props => {
    const columns = React
        .Children
        .map(props.children, (column) => {
            return column;
        });
    const tableHeader = (
        <tr>
            {columns.map((value, index) => (
                <th key={index}>
                    {value.props.label}
                </th>
            ))}
        </tr>
    );

    const tableRow = (rowIndex) => (columns.map((value, index) => (
        <td key={index}>{props.data[rowIndex][value.props.prop]}</td>
    )));

    return (
        <div>
            <table>
                <thead>
                    {tableHeader}
                </thead>
                <tbody>
                    {props
                        .data
                        .map((value, rowIndex) => (
                            <tr key={rowIndex}>
                                {tableRow(rowIndex)}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

table.propTypes = {
    data: PropTypes.array
};

export default table;