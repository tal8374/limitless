import React, {Component} from 'react';

import './students.css';

import {Item} from 'semantic-ui-react'
import Student from "./student/student";

const students = [
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
];

class Students extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getStudents() {
        return students.map(currentStudent => {
            return <Student student={currentStudent}/>
        })
    }

    render() {

        return (
            <Item.Group divided>
                {this.getStudents()}
            </Item.Group>
        );
    }
}

export default Students;

