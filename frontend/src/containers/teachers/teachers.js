import React, {Component} from 'react';
import SearchTeachers from "../../components/search-teachers/search-teachers";
import Teachers from "../../components/teachers/teachers";
import {Pagination, Grid} from 'semantic-ui-react'
import Comments from "../../components/comments/comments";


const users = [
    {
        firstName: '1',
        key: '1',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        firstName: '2',
        key: '2',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        firstName: '3',
        key: '3',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '4',
        firstName: '4',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '5',
        firstName: '5',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '6',
        firstName: '6',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '7',
        firstName: '7',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '8',
        firstName: '8',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '9',
        firstName: '9',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '10',
        firstName: '10',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '11',
        firstName: '11',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
    {
        key: '12',
        firstName: '12',
        lastName: 'last',
        registeredAt: new Date,
        phone: '0543534542',
        email: 'email@gmail.com',
        roles: ['teacher'],
        dateOfBirth: new Date(),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
        from: {
            country: 'country',
            city: 'city',
            street: 'street',
        },
    },
];


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

    getNumberOfPages() {
        return Math.ceil(users.length / this.state.perPage);
    }

    handlePaginationChange(e, {activePage}) {
        console.log("-----------")
        // console.log(activePage)
        // console.log(this.state.perPage)
        this.setState({activePage})
    }

    getToSkip() {
        return (this.state.activePage - 1) * this.state.perPage;
    }

    getToLimit() {
        return this.state.perPage;
    }

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
                            <Grid>
                                <Grid.Row>
                                    <Teachers
                                        teachers={users}
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
                                            // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
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

export default TeachersContainer;
