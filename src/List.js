import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((boss) => (
                        <li>{this.props.bosses[boss]}</li>
                    ))
                }
            </ul>
        )
    }
}

export default List;
