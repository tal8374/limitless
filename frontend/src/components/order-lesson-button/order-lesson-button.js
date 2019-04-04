import React, {Component} from 'react';

import './order-lesson-button.css';

import { Button, Grid, Popup } from 'semantic-ui-react'

class OrderLessonButton extends Component {
    render() {

        return (
            <Popup wide trigger={<Button content='Are you the one?'/>} on='click'>
                <Grid divided columns='equal'>
                    <Grid.Column>
                        <Popup
                            trigger={<Button color='blue' content='Blue Pill' fluid/>}
                            content='The story ends. You wake up in your bed and believe whatever you want to believe.'
                            position='top center'
                            size='tiny'
                            inverted
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Popup
                            trigger={<Button color='red' content='Red Pill' fluid/>}
                            content='Stay in Wonderland, and I show you how deep the rabbit hole goes.'
                            position='top center'
                            size='tiny'
                            inverted
                        />
                    </Grid.Column>
                </Grid>
            </Popup>
        )


    }
}

export default OrderLessonButton;

