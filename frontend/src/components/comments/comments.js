import React, {Component} from 'react'
import {Comment, Header, Pagination} from 'semantic-ui-react'
import Profile from "../teachers/teachers";
import StatusMessage from "../status-message/status-message";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: props.size ? props.size : 'large',
            perPage: props.perPage ? props.perPage : 3,
            activePage: 1,
            showEllipsis: true,
            showFirstAndLastNav: true,
            showPreviousAndNextNav: true,
        };
    }

    getComments() {


        const toSkip = (this.state.activePage - 1) * this.state.perPage;

        let filtered = this.props.user.comments.slice(toSkip, toSkip + this.state.perPage);

        filtered = filtered.map((teacher) => (
            <Profile key={teacher.key} user={teacher} profile={'teacher'}/>
        ));

        return filtered.map((comment) => {
            return (
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
            )
        })
    }

    getNumberOfPages() {
        return Math.ceil(this.props.user.comments.length / this.state.perPage);
    }

    handlePaginationChange(e, {activePage}) {
        this.setState({activePage})
    }

    getToSkip() {
        return (this.state.activePage - 1) * this.state.perPage;
    }

    getToLimit() {
        return this.state.perPage;
    }

    render() {
        const {isLoading, error, user} = this.props;

        if (error || !user || isLoading ) {
            return (
                <StatusMessage
                    error={error || !user}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the comments for you`}
                    nothing={user}
                    nothingMessage={`No comments to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        console.log(user.comments)

        return (
            <Comment.Group size={this.state.size}>
                <Header as='h3' dividing>
                    Last Comments
                </Header>

                {this.getComments()}

                <Pagination

                    activePage={this.state.activePage}
                    boundaryRange={1}
                    onPageChange={this.handlePaginationChange.bind(this)}
                    siblingRange={1}
                    totalPages={this.getNumberOfPages()}
                    ellipsisItem={this.state.showEllipsis ? undefined : null}
                    firstItem={this.state.showFirstAndLastNav ? undefined : null}
                    lastItem={this.state.showFirstAndLastNav ? undefined : null}
                    prevItem={this.state.showPreviousAndNextNav ? undefined : null}
                    nextItem={this.state.showPreviousAndNextNav ? undefined : null}
                />

            </Comment.Group>
        )
    }

}

export default Comments

