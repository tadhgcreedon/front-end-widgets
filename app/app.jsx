import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserMenu from './UserMenu.jsx';
import Stocks from './Stocks.jsx';

require('../style/style.scss');
let widgets_contents = require('./widgets_contents.json');

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
