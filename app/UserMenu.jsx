import React, { Component } from 'react';

export default class UserMenu extends Component {
    render(){
        let buttons = this.props.content['buttons'].map((button) => {
            return <button className='user_menu_button' key={button.order}>{button.label}</button>;
        });
        return(
            <section id='user_menu_container'>
              {buttons}
            </section>
        );
    }
}
