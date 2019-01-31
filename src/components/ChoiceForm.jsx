import React, { Component } from 'react';
import { arrayOf, shape } from 'prop-types';
import Api from '../Api';
import store from '../store';

export default class ChoiceForm extends Component {
  static propTypes = {
    questions: arrayOf(shape({})),
  }

  static defaultProps = {
    questions: [],
  }

  state = {
    choiceText: '',
    votes: 0,
    question: '',
  }

  handleFormChange = (key, value) => this.setState({ [key]: value })

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { choiceText, votes, question } = this.state;
    Api
      .createChoice({ choiceText, votes, question })
      .then(() => {
        Api.getChoiceMany().then(({ data }) => { store.choices = data.results; });
      });
  }

  render() {
    const { questions } = this.props;
    const { choiceText, votes, question } = this.state;

    return (
      <>
        <h3>Question</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="row">
              <label htmlFor="choiceText">Choice text</label>
              <input
                className="u-full-width"
                type="text"
                id="choiceText"
                value={choiceText}
                onChange={e => this.handleFormChange('choiceText', e.target.value)}
              />
            </div>
            <div className="row">
              <label htmlFor="votes">Votes</label>
              <input
                className="u-full-width"
                type="number"
                id="votes"
                value={votes}
                onChange={e => this.handleFormChange('votes', e.target.value)}
              />
            </div>
            <div className="row">
              <label htmlFor="question">Question</label>
              <select
                required
                className="u-full-width"
                name="question"
                id="question"
                value={question}
                onChange={e => this.handleFormChange('question', e.target.value)}
              >
                <option value="">--------</option>
                {questions.map(q => <option key={q.id} value={q.url}>{q.questionText}</option>)}
              </select>
            </div>
            <button className="button-primary" type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}
