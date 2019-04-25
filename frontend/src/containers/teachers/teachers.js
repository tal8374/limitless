import React, {Component} from 'react';
import SearchTeachers from "../../components/search-teachers/search-teachers";
import {Pagination, Grid} from 'semantic-ui-react'
import Comments from "../../components/comments/comments";
import {connect} from 'react-redux';
import {fetchTeachers, showCreateMessageModal, updateUser} from '../../actions';
import StatusMessage from "../../components/status-message/status-message";
import Users from "../../components/users/users";

class TeachersContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            perPage: 3,
            activePage: 1,
            showEllipsis: true,
            showFirstAndLastNav: true,
            showPreviousAndNextNav: true,
        };

        this.props.fetchTeachers();
    }

    getNumberOfPages() {
        return Math.ceil(this.props.teachers.length / this.state.perPage);
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

    getComments() {
        let comments = [];

        for (let i = 0; i < this.props.teachers.length; i++) {
            comments = [...comments, ...this.props.teachers[i].comments];
        }

        return comments;
    }

    render() {
        const {isLoading, error, teachers} = this.props;

        if (error || !teachers || isLoading || teachers.length === 0) {
            return (
                <StatusMessage
                    error={error || !teachers}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the teachers for you`}
                    nothing={teachers && teachers.length === 0}
                    nothingMessage={`No teachers to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        console.log(this.props.isCreateMessageModalOpen)

        return (
            <div>
                <SearchTeachers/>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={1}/>
                        <Grid.Column width={4}>
                            <Comments comments={this.getComments()}/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Grid>
                                <Grid.Row>
                                    <Users
                                        {...this.props}
                                        users={this.props.teachers}
                                        getToLimit={this.getToLimit.bind(this)}
                                        getToSkip={this.getToSkip.bind(this)}
                                    />
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}/>
                                    <Grid.Column width={8}>
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
                                    </Grid.Column>
                                    <Grid.Column width={4}/>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={1}/>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.teachers.isLoading,
    teachers: state.teachers.teachers,
    error: state.teachers.error,
    isCreateMessageModalOpen: state.messages.isCreateMessageModalOpen,
});

const mapDispatchToProps = dispatch => ({
    fetchTeachers: () => {
        dispatch(fetchTeachers());
    },
    showCreateMessageModal: () => {
        dispatch(showCreateMessageModal());
    },
    closeCreateMessageModal: () => {
        dispatch(showCreateMessageModal());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TeachersContainer);
