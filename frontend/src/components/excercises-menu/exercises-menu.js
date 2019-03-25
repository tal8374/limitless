import React, {Component} from 'react';

import { Menu } from 'semantic-ui-react'

class ExercisesMenu extends Component {
    state = { activeItem: 'Words' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <Menu color={'black'}  widths={3}>
                <Menu.Item name='Words' active={activeItem === 'words'} onClick={this.handleItemClick} />
                <Menu.Item name='Sentences' active={activeItem === 'Sentences'} onClick={this.handleItemClick} />
                <Menu.Item name='Grammar' active={activeItem === 'Grammar'} onClick={this.handleItemClick} />
            </Menu>
        )
    }

}

export default ExercisesMenu;
