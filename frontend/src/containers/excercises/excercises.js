import React, {Component} from 'react';
import ExercisesMenu from "../../components/excercises-menu/exercises-menu";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Dictionary from "../../components/dictionary/dictionary";
import Container from "react-bootstrap/Container";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";

class ExercisesContainer extends Component {


    render() {
        return (
            <Grid>
                <Grid.Row>
                    <ExercisesMenu/>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={10}>
                        <Container text >
                           page content
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Dictionary/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
    );
    }
    }

    export default ExercisesContainer;
