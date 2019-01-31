import React, { Component } from 'react';
import QuestionForm from '../components/QuestionForm';
import QuestionList from './QuestionList';
import Api from '../Api';
import store from '../store';

class Question extends Component {
  componentDidMount() {
    Api.getQuestionMany().then(({ data }) => { store.questions = data.results; });
  }

  render() {
    return (
      <div>
        <QuestionList />
        <QuestionForm />
      </div>
    );
  }
}

export default Question;
