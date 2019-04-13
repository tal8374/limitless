import React, {Component} from 'react';
import SearchTeachers from "../../components/search-teachers/search-teachers";
import Teachers from "../../components/teachers/teachers";
import {Pagination, Grid} from 'semantic-ui-react'
import Comments from "../../components/comments/comments";
import {connect} from 'react-redux';
import {fetchTeachers} from '../../actions';
import StatusMessage from "../../components/status-message/status-message";

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
    }

    componentDidMount() {
        this.props.fetchTeachers();
    }

    getNumberOfPages() {
        return Math.ceil(this.props.users.length / this.state.perPage);
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
        const {isLoading, error, users} = this.props;

        if (error || !users || isLoading || users.length === 0) {
            return (
                <StatusMessage
                    error={error || !users}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the teachers for you`}
                    nothing={users && users.length === 0}
                    nothingMessage={`No teachers to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        return (
            <div>
                <SearchTeachers/>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={1}/>
                        <Grid.Column width={4}>
                            <Comments/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Grid>
                                <Grid.Row>
                                    <Teachers
                                        {...this.props}
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
    isLoading: state.users.isLoading,
    users: state.users.users,
    error: state.users.error,
});

const mapDispatchToProps = dispatch => ({
    fetchTeachers: () => {
        dispatch(fetchTeachers());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TeachersContainer);
