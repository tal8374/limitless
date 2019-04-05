import React, {Component} from 'react';

import {Menu} from 'semantic-ui-react'

class ExercisesMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {activeItem: 'Words'};
    }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
        this.props.handleChoiceChange(name);
    };

    render() {
        const {activeItem} = this.state;

        return (
            <Menu color={'black'} widths={3}>
                <Menu.Item name='Words' active={activeItem === 'Words'} onClick={this.handleItemClick}/>
                <Menu.Item name='Sentences' active={activeItem === 'Sentences'} onClick={this.handleItemClick}/>
                <Menu.Item name='Grammar' active={activeItem === 'Grammar'} onClick={this.handleItemClick}/>
            </Menu>
        )
    }

}

export default ExercisesMenu;
