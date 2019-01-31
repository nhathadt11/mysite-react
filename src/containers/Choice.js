import React, { Component } from 'react';
import Api from '../Api';
import store from '../store';
import ChoiceForm from './ChoiceForm';
import ChoiceList from './ChoiceList';

class Choice extends Component {
  componentDidMount() {
    Api.getChoiceMany().then(({ data }) => { store.choices = data.results; });
    Api.getQuestionMany().then(({ data }) => { store.questions = data.results; });
  }

  render() {
    return (
      <div>
        <ChoiceList />
        <ChoiceForm />
      </div>
    );
  }
}

export default Choice;
