import React from 'react';
import { arrayOf, shape } from 'prop-types';

const QuestionList = ({ dataList }) => (
  <>
    <h2>Question List</h2>
    <ul>
      {dataList.map(q => <li key={q.id}>{q.questionText}</li>)}
      {dataList.length === 0 && <span>No questions</span>}
    </ul>
  </>
);

QuestionList.propTypes = {
  dataList: arrayOf(shape({})),
};

QuestionList.defaultProps = {
  dataList: [],
};

export default QuestionList;
