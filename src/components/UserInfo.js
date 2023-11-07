import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function UserInfo() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        
        const user_id = localStorage.getItem('user_id');        
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/resource?user_id=${user_id}`);
                console.log(response.data);
                setUserData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData(); 
    }, []); 

    return (
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <h1>User Info</h1>
                </Col>
                <Col lg={12}>
                    <p>Name: {userData.name}</p>
                </Col>
                <Col lg={12}>
                    <p>Email: {userData.email}</p>
                </Col>                    
            </Row>
        </Container>
        
    );
}

export default UserInfo;
