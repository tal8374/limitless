import React, {Component} from 'react';
import ExercisesMenu from "../../components/execises/menu/exercises-menu";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Dictionary from "../../components/execises/dictionary/dictionary";
import WordsExcercise from "../../components/execises/words-exercise/words-exercise";
import GrammarExercise from "../../components/execises/grammar-exercise/grammar-exercise";
import SentenceExercise from "../../components/execises/sentence-exercise/sentence-exercise";

class ExercisesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {activeItem: 'Words'};
    }

    handleChoiceChange(item) {
        this.setState({activeItem: item})
    }

    getContent() {
        if(this.state.activeItem === 'Words') {
            return (
                <WordsExcercise/>
            )
        } else if (this.state.activeItem === 'Sentences') {
            return (
                <SentenceExercise/>
            )
        } else {
            return (
                <GrammarExercise/>
            )
        }
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <ExercisesMenu handleChoiceChange={this.handleChoiceChange.bind(this)}/>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={12}>
                        {this.getContent()}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Dictionary/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default ExercisesContainer;
