// src/pages/UserDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams(); // Obtém o id do usuário da URL

    useEffect(() => {
        // Requisição GET para buscar os detalhes do usuário
        axios.get(`https://dummyjson.com/users/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes do usuário:', error);
            });
    }, [id]);

    if (!user) return <div>Carregando...</div>;

    return (
        <div className="container mt-4">
            <h1>Detalhes do Usuário</h1>
            <Card>
            <Card.Img
  variant="top"
  src={user.image}
  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
/>
                <Card.Body>
                    <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                        <ListGroup.Item>Telefone: {user.phone}</ListGroup.Item>
                        <ListGroup.Item>Gênero: {user.gender}</ListGroup.Item>
                        <ListGroup.Item>Idade: {user.age}</ListGroup.Item>
                        <ListGroup.Item>Data de Nascimento: {user.birthDate}</ListGroup.Item>
                        <ListGroup.Item>Universidade: {user.university}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserDetails;
