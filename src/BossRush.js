import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bossList from './data/bosses.json';
import lists from './data/lists.json';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';

class BossRush extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bosses: [],
            bossLists: lists,
        };
    }

    render() {
        return (
            <Container fluid className="App">
                <Row>
                    {
                        this.state.bossLists.map((list) => (
                            <List bosses={bossList} list={list} />
                        ))
                    }
                </Row>
                <Row>
                    Your Bosses:
                    {
                        this.state.bosses.map((boss) => (
                            <Col style={{ alignText: 'center' }}>
                                {boss}
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default BossRush;
