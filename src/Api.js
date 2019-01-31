import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.params = { format: 'json' };

const getQuestionMany = () => axios.get('/questions/');
const createQuestion = question => axios.post('/questions/', question);

const getChoiceMany = () => axios.get('/choices/');
const createChoice = choice => axios.post('/choices/', choice);

export default {
  getQuestionMany,
  createQuestion,

  getChoiceMany,
  createChoice,
};
