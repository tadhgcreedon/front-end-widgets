import React, { Component } from 'react';

export default class UserMenu extends Component {
    render(){
        let buttons = this.props.content['buttons'].map((button) => {
            return(
                <button className='user_menu_button' key={button.order}>
                  {button.image}
                  {button.label}
                  {button.notifications > 0 ? <Badge notification_number={button.notifications}/> : null}
                </button>
            );
        });
        return(
            <section id='user_menu_container'>{buttons}</section>
        );
    }
}

class Badge extends Component {
    render() {
        return(
            <span className='user_menu_button_badge'>{this.props.notification_number}</span>
        );
    }
}
