import React, {Component} from 'react';
import ExercisesMenu from "../../components/execises/menu/exercisesMenu";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Dictionary from "../../components/execises/dictionary/dictionary";
import Content from "../../components/execises/content/content";

class ExercisesContainer extends Component {

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <ExercisesMenu/>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={11}>
                        <Content/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Dictionary/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default ExercisesContainer;
