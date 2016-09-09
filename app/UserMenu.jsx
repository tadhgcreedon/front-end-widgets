import React, { Component } from 'react';

export default class UserMenu extends Component {
    constructor(props) {
        super(props);

        let selected = {};
        this.buttons = [];
        this.props.content['buttons'].forEach((button) => {
            this.buttons.push(button.label);
            selected[button.label] = false;
        });
        this.state = { selected };
    }

    handleButtonClick(button_label){
        for(let button in this.state.selected) {
            let newSelected = this.state.selected;
            if(this.buttons.indexOf(button) !== -1 && button === button_label) {
                newSelected[button] === true ? newSelected[button] = false : newSelected[button] = true;
            }
            else {
                if(this.buttons.indexOf(button) !== -1) {
                    newSelected[button] = false;
                }
            }
            this.setState({selected: newSelected}, () => {
                console.log(newSelected);
            });
        }
    }

    buttonSelectedCustomClass(button_label) {
        switch(button_label) {
            case 'CHECK IN':
                return 'user_menu_button_selected_check_in';
            case 'EVENTS':
                return 'user_menu_button_selected_events';
            case 'ACCOUNT':
                return 'user_menu_button_selected_account';
            case 'SETTINGS':
                return 'user_menu_button_selected_settings';
            default:
                return '';
        }
    }

    render(){
        let buttons_selected_classes;
        let buttons = this.props.content['buttons'].map((button, index) => {
            if(this.state.selected[button.label] === true) {
                buttons_selected_classes = ' user_menu_button_selected  ' + this.buttonSelectedCustomClass(button.label);
            }
            else {
                buttons_selected_classes = '';
            }
            return(
                <button className={'user_menu_button' + buttons_selected_classes} key={index} onClick={() => this.handleButtonClick(button.label)}>
                  <img className='user_menu_button_icon' src={button.icon_path} />&nbsp;
                  <span className='user_menu_button_text'>
                    <span className="user_menu_button_text_label">{button.label}</span>
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
