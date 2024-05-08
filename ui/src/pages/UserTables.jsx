import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Endpoints } from '../api';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await fetch(Endpoints.session, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },)
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const columns = [
        { field: 'id', header: 'ID' },
        { field: 'email', header: 'Email' },
        { field: 'name', header: 'Name' },
    ];

    const renderColumns = columns.filter(column => column.field !== 'password');

    return (
        <DataTable value={users} editMode="cell" tableStyle={{ minWidth: '50rem' }} loading={loading}>
            {renderColumns.map(({ field, header }) => (
                <Column
                    key={field}
                    field={field}
                    header={header}
                    style={{ width: '25%' }}
                />
            ))}
        </DataTable>
    );
};

export default UserTable;
