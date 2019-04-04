import React, {Component} from 'react';

import './search-teachers.css';
import {Form, Message, Button, Menu, Label} from 'semantic-ui-react';
import StatusMessage from '../../components/status-message/status-message';
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Dropdown} from 'semantic-ui-react'
import Accordion from "semantic-ui-react/dist/commonjs/modules/Accordion";
import SearchSelectedItems from "../search-selected-items/search-selected-items";

class SearchTeachers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            placeOfStudyIndex: 0,
            studyOptionIndex: 0,
            genderIndex: 0,
            price: 0
        };
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    };

    handleGenderClick = (e, titleProps) => {
        const {index} = titleProps;
        const {genderIndex} = this.state;
        const newIndex = genderIndex === index ? -1 : index;

        this.setState({genderIndex: newIndex})
    };

    handleStudyOptionsClick = (e, titleProps) => {
        const {index} = titleProps;
        const {studyOptionIndex} = this.state;
        const newIndex = studyOptionIndex === index ? -1 : index;

        this.setState({studyOptionIndex: newIndex})
    };

    handlePlaceOfStudyClick = (e, titleProps) => {
        const {index} = titleProps;
        const {placeOfStudyIndex} = this.state;
        const newIndex = placeOfStudyIndex === index ? -1 : index;

        this.setState({placeOfStudyIndex: newIndex})
    };

    countryOptions = [
        {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'},
        {key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands'},
        {key: 'al', value: 'al', flag: 'al', text: 'Albania'},
        {key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria'},
        {key: 'as', value: 'as', flag: 'as', text: 'American Samoa'},
        {key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra'},
        {key: 'ao', value: 'ao', flag: 'ao', text: 'Angola'},
        {key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla'},
        {key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua'},
        {key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
        {key: 'am', value: 'am', flag: 'am', text: 'Armenia'},
        {key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba'},
        {key: 'au', value: 'au', flag: 'au', text: 'Australia'},
        {key: 'at', value: 'at', flag: 'at', text: 'Austria'},
        {key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan'},
        {key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas'},
        {key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain'},
        {key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh'},
        {key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados'},
        {key: 'by', value: 'by', flag: 'by', text: 'Belarus'},
        {key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
        {key: 'bz', value: 'bz', flag: 'bz', text: 'Belize'},
        {key: 'bj', value: 'bj', flag: 'bj', text: 'Benin'},
        {key: 'bm', value: 'bm', flag: 'bm', text: 'Bermuda'},
        {key: 'bt', value: 'bt', flag: 'bt', text: 'Bhutan'},
        {key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia'},
        {key: 'ba', value: 'ba', flag: 'ba', text: 'Bosnia'},
        {key: 'bw', value: 'bw', flag: 'bw', text: 'Botswana'},
        {key: 'bv', value: 'bv', flag: 'bv', text: 'Bouvet Island'},
        {key: 'br', value: 'br', flag: 'br', text: 'Brazil'},
        {key: 'vg', value: 'vg', flag: 'vg', text: 'British Virgin Islands'},
        {key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei'},
        {key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria'},
        {key: 'bf', value: 'bf', flag: 'bf', text: 'Burkina Faso'},
        {key: 'bi', value: 'bi', flag: 'bi', text: 'Burundi'},
        {key: 'tc', value: 'tc', flag: 'tc', text: 'Caicos Islands'},
        {key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia'},
        {key: 'cm', value: 'cm', flag: 'cm', text: 'Cameroon'},
        {key: 'ca', value: 'ca', flag: 'ca', text: 'Canada'},
    ];

    render() {
        const StudyOptionsForm = (
            <Form>
                <Form.Group grouped>
                    <Form.Checkbox label='Online' name='online' value='red'/>
                    <Form.Checkbox label='Offline' name='offline' value='orange'/>
                </Form.Group>
            </Form>
        )

        const GenderForm = (
            <Form>
                <Form.Group grouped>
                    <Form.Checkbox label='Female' name='female' value='red'/>
                    <Form.Checkbox label='Male' name='male' value='orange'/>
                </Form.Group>
            </Form>
        )

        const PlayOfStudyForm = (
            <Form>
                <Label>Country</Label>
                <Dropdown
                    control={Dropdown}
                    fluid
                    search
                    selection
                    label='Place of study'
                    options={this.countryOptions}
                    placeholder='Place of study'
                />
                <Label>City</Label>
                <Dropdown
                    control={Dropdown}
                    fluid
                    search
                    selection
                    label='Place of study'
                    options={this.countryOptions}
                    placeholder='Place of study'
                />
            </Form>
        )

        let {isLoading, error, showRegister} = this.props;

        const statusMessage = (
            <StatusMessage
                error={error}
                errorMessage={error || 'Login Error'}
                loading={isLoading}
                loadingMessage={'Signing in'}
                type="modal"
            />
        );


        return (
            <div className='login-form' style={{marginTop: '0px'}}>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: '100%'}}>
                        <Message attached header="Search From Our Best English Teachers"/>
                        {statusMessage}
                        <Form className="attached fluid segment">
                            <Grid columns={4} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <Accordion as={Menu} vertical style={{width: '430px'}}>
                                                <Menu.Item>
                                                    <Accordion.Title
                                                        active={this.state.placeOfStudyIndex === 1}
                                                        content='Place of study'
                                                        index={1}
                                                        onClick={this.handlePlaceOfStudyClick}
                                                    />
                                                    <Accordion.Content active={this.state.placeOfStudyIndex === 1}
                                                                       content={PlayOfStudyForm}/>
                                                </Menu.Item>
                                            </Accordion>
                                        </Form.Field>
                                    </Grid.Column>

                                    <Grid.Column>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <Accordion as={Menu} vertical style={{width: '430px'}}>
                                                <Menu.Item>
                                                    <Accordion.Title
                                                        active={this.state.activeIndex === 1}
                                                        content='Online \ Offline'
                                                        index={1}
                                                        onClick={this.handleStudyOptionsClick}
                                                    />
                                                    <Accordion.Content active={this.state.studyOptionIndex === 1}
                                                                       content={StudyOptionsForm}/>
                                                </Menu.Item>
                                            </Accordion>
                                        </Form.Field>
                                    </Grid.Column>

                                    <Grid.Column>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <Accordion as={Menu} vertical style={{width: '430px'}}>
                                                <Menu.Item>
                                                    <Accordion.Title
                                                        active={this.state.activeIndex === 1}
                                                        content='Gender'
                                                        index={1}
                                                        onClick={this.handleGenderClick}
                                                    />
                                                    <Accordion.Content active={this.state.genderIndex === 1}
                                                                       content={GenderForm}/>
                                                </Menu.Item>
                                            </Accordion>
                                        </Form.Field>
                                    </Grid.Column>

                                    <Grid.Column>
                                        <Form.Input
                                            label={`Price: ${this.state.price} `}
                                            min={0}
                                            max={400}
                                            name='price'
                                            onChange={this.handleChange}
                                            step={1}
                                            type='range'
                                            value={this.state.price}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form>
                        <Message attached="bottom" warning>
                            //TODO: add error message here
                        </Message>
                    </Grid.Column>
                </Grid>
                <SearchSelectedItems/>
                <hr/>
            </div>
        );
    }
}

export default SearchTeachers;

