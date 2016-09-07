import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
    render() {
        return(
            <div>test</div>
        );
    }
}

ReactDOM.render(<Test/>, document.getElementById('render-target'));
