import React, {Component} from 'react';
import SearchTeachers from "../../components/search-teachers/search-teachers";
import UserList from "../../components/user-list/user-list";
import {Pagination, Grid} from 'semantic-ui-react'
import Comments from "../../components/comments/comments";

class TeachersContainer extends Component {
    render() {
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
                            <UserList/>

                            <Grid>

                                <Grid.Row>
                                    <Grid.Column width={4}/>

                                    <Grid.Column width={8}>
                                        <Pagination defaultActivePage={5} totalPages={10}/>
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

export default TeachersContainer;
