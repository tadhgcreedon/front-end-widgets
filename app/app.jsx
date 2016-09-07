import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserMenu from './UserMenu.jsx';

require('../style.scss');
let widgets_contents = require('./widgets_contents.json');

class App extends Component {
    render() {
        return(
            <UserMenu content={widgets_contents['UserMenu']} />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('render-target'));
