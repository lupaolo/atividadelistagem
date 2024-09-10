// src/pages/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.error('Erro ao buscar usuários:', error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1>Lista de Usuários</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td><img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={{ width: '50px', height: '50px' }} /></td>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.age}</td>
                            <td><Link to={`/user/${user.id}`}>Ver Detalhes</Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;
