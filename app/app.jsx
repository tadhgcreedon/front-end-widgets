import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../style.scss');
let widgets_contents = require('./widgets-contents.json');

class Test extends Component {
    render() {
        return(
            <div>test</div>
        );
    }
}

ReactDOM.render(<Test/>, document.getElementById('render-target'));
