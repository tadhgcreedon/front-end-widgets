import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// User Menu Widget components
import UserMenu from './UserMenu.jsx';
// Stocks component
import Stocks from './Stocks.jsx';
// Content for each of the widgets
let widgets_contents = require('./widgets_contents.json');

require('../style/style.scss');

class App extends Component {
    render() {
        return(
            <div>
              <UserMenu content={widgets_contents['UserMenu']} />
              <Stocks content={widgets_contents['Stocks']} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('render-target'));
