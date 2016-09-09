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

    render(){
        let buttons = this.props.content['buttons'].map((button, index) => {
            return(
                <button className={'user_menu_button'} key={index} onClick={() => this.handleButtonClick(button.label)}>
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
