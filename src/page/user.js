import React from 'react';
import PropTypes from 'prop-types';

import {Table, TableColumn} from '@/component/ui/table/index';

const data = [
    {
        name: 'frank',
        id: 1
    }, {
        name: 'hehe',
        id: 2
    }
]

const user = props => {
    return (
        <div>
            <h1>用户管理</h1>
            <Table data={data}>
                <TableColumn label='id' prop='id' key='id'></TableColumn>
                <TableColumn label='name' prop='name' key='name'></TableColumn>
            </Table>
        </div>
    );
};

user.propTypes = {};

export default user;