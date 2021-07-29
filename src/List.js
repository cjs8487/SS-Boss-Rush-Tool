import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class List extends React.Component {
    render() {
        return (
            <Col>
                {
                    this.props.list.map((boss) => (
                        <Row>
                            <p>
                                {this.props.bosses[boss]}
                            </p>
                        </Row>
                    ))
                }
            </Col>
        );
    }
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    bosses: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default List;
