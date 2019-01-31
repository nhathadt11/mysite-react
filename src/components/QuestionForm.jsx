import React, { Component } from 'react';
import { arrayOf, shape } from 'prop-types';
import Api from '../Api';
import store from '../store';

export default class QuestionForm extends Component {
  static propsTypes = {
    choices: arrayOf(shape({})).isRequired,
  }

  state = {
    questionText: '',
    pubDate: '',
  }

  handleFormChange = (key, value) => this.setState({ [key]: value })

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { questionText, pubDate } = this.state;
    Api.createQuestion({ questionText, pubDate }).then(() => {
      this.reset();

      Api.getQuestionMany().then(({ data }) => {
        store.questions = data.results;
      });
    });
  }

  reset = () => this.setState({ questionText: '', pubDate: '' })

  render() {
    const { questionText, pubDate } = this.state;

    return (
      <>
        <h3>Question</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="row">
              <label htmlFor="questionText">Question text</label>
              <input
                className="u-full-width"
                type="text"
                id="questionText"
                value={questionText}
                onChange={e => this.handleFormChange('questionText', e.target.value)}
              />
            </div>
            <div className="row">
              <label htmlFor="pubDate">Date published</label>
              <input
                className="u-full-width"
                type="datetime-local"
                id="pubDate"
                value={pubDate}
                onChange={e => this.handleFormChange('pubDate', e.target.value)}
              />
            </div>
            <button className="button-primary" type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}
