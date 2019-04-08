import React, {Component} from 'react'
import {Button, Comment, Form, Header} from 'semantic-ui-react'

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Comment.Group>
                <Header as='h3' dividing>
                    Last Comments
                </Header>

                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                    </Comment.Content>
                </Comment>

            </Comment.Group>
        )
    }

}

export default Comments

