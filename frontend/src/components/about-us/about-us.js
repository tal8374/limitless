import React, {Component} from 'react';

import {Container, Header, Segment} from 'semantic-ui-react'

import CommonQuestions from '../common-questions/common-questions';
import SiteStatistics from "../../components/site-statistics/site-statistics";

export default class AboutUsContainer extends Component {

    render() {
        return (
            <Segment>

                <Container textAlign='justified'>
                    <SiteStatistics/>
                    <Header as='h2'>About us</Header>
                    <p>
                        TeacherOn.com is a free website, trusted by thousands of students and teachers, throughout the
                        world.

                        We are not the biggest, but we care the most. Even though you will visit other websites for
                        similar services, we want you to remember us and tell your friends about us. We put the work to
                        be that awesome for you.
                    </p>
                    <p>
                        <Header as='h3'>Mission</Header>
                        To make every teacher searchable in the world in their local area and online. To keep the
                        website free for teachers and students. To provide students with a teacher within 24 hours of
                        posting their requirement.
                    </p>

                    <p>
                        <Header as='h3'>Operating Principles</Header>
                        <ol>
                            <li>Information should be free - People who can not afford to pay should not be forced to.
                            </li>
                            <li>Ease of operation - Design user-friendly systems and improve them continuously based on
                                your feedback.
                            </li>
                            <li>The inclusion of everybody in the world - This means not only metros and big cities but
                                also remote areas in small and developing countries.
                            </li>
                            <li>
                                Quality of information - Even if we have to sacrifice ease of operation a little bit,
                                the increase in quality takes precedence.
                            </li>
                            <li>Zero tolerance towards miscreants, spammers, and marketers who care about nothing but
                                their profit.
                            </li>
                            <li>You first - Students are the future and the teachers are what make them. Everything we
                                do is focussed on how to best serve the interests of students and teachers.
                            </li>
                        </ol>
                    </p>
                    <p>
                        <Header as='h3'>Our commitment to you</Header>
                        Your data is never shared or sold. You will never be spammed.

                        You can expect continuous improvement in the software, quick action on your feedback, with
                        ever-increasing features and more chances for you to find teachers and teaching jobs.
                    </p>
                    <CommonQuestions/>
                </Container>
            </Segment>
        )
    }
}

