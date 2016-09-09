import React, { Component } from 'react';

export default class UserMenu extends Component {
    constructor(props) {
        super(props);

        /* store a list of all button labels and maintain a state object with each of the labels and a boolean flag
            for conditional styling of a selected button. This is done in a way that buttons could be added or removed
            inside the widget_contents JSON file and the component will still function as expected.*/
        let selected = {};
        this.buttons = [];
        this.props.content['buttons'].forEach((button) => {
            this.buttons.push(button.label);
            selected[button.label] = false;
        });
        this.state = { selected };
    }

    // handler function for button select event. sets state
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
            this.setState({selected: newSelected});
        }
    }

    // function that adds a custom class defined in the widget_contents JSON file to each selected button.
    buttonSelectedCustomClass(button_label) {
        if(this.props.content['button_selected_classes'].hasOwnProperty(button_label)) {
            return this.props.content['button_selected_classes'][button_label];
        }
        else {
            return '';
        }
    }

    render(){
        // creates and returns all button markup
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

// Badge for a button that has notifications.
class Badge extends Component {
    render() {
        return(
            <span className='user_menu_button_badge'>{this.props.notification_number}</span>
        );
    }
}
