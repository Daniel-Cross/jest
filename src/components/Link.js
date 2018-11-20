import React, { Component } from 'react';

class Link extends Component {
    render() {
        return(
        <div className="Link">
            <a href={this.props.address}>Click</a>
        </div>
        )
    }
}

export default Link;