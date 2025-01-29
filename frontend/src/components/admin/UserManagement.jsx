// File: frontend/src/components/admin/UserManagement.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import '../../styles/admin/UserManagement.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await api.getUsers();
        setUsers(data);
    };

    const handleRoleChange = async (userId, newRole) => {
        await api.updateUserRole(userId, newRole);
        fetchUsers();
    };

    return (
        <div className="user-management">
            <h2>User Management</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th
