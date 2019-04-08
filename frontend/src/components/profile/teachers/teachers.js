import React, {Component} from 'react';

import './teachers.css';

import {Item} from 'semantic-ui-react'
import Teacher from "./teacher/teacher";

const teachers = [
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
    {lastLessonAt: new Date().toDateString(), numberOfLessons: 2},
];

class Teachers extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getTeachers() {
        return teachers.map(currentTeacher => {
            return <Teacher teacher={currentTeacher}/>
        })
    }

    render() {

        return (
            <Item.Group divided>
                {this.getTeachers()}
            </Item.Group>
        );
    }
}

export default Teachers;

