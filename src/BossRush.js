import React from 'react';
import _ from 'lodash';
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

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(e) {
        const value = e.target.innerText;
        this.setState((state) => {
            const bosses = [...state.bosses, value];
            const bossLists = [...state.bossLists];
            const newBossLists = [];
            _.forEach(bossLists, (list) => {
                console.log(list);
                console.log(value);
                console.log(bossList[value]);
                console.log(list.indexOf(bossList[value]));
                newBossLists.push(_.filter(list, (boss) => boss !== bossList[value]));
            });
            return { bosses, bossLists: newBossLists };
        });
    }

    render() {
        return (
            <Container fluid className="App">
                <Row>
                    {
                        _.map(this.state.bossLists, (list) => (
                            <List bosses={bossList} list={list} key={`list-${list}`} />
                        ))
                    }
                </Row>
                <Row>
                    {
                        this.state.bossLists.map((list) => (
                            <Col>
                                <button type="button" onClick={this.buttonClicked}>{bossList[list[0]]}</button>
                            </Col>
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
