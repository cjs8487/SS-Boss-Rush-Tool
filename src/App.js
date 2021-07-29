import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import bosses from './data/bosses.json';
import lists from './data/lists.json';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Container fluid className="App">
            <Row>
                {
                    lists.map((list) => (
                        <List bosses={bosses} list={list} />
                    ))
                }
            </Row>
        </Container>
    );
}

export default App;
