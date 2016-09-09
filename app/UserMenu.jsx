import React, { Component } from 'react';

export default class UserMenu extends Component {
    render(){
        let buttons = this.props.content['buttons'].map((button, index) => {
            return(
                <button className='user_menu_button' key={index}>
                  <img className='user_menu_button_icon' src={button.icon_path} />&nbsp;
                  <span className='user_menu_button_text'>
                    {button.label}
                    {button.notifications > 0 ? <Badge notification_number={button.notifications}/> : null}
                  </span>
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
