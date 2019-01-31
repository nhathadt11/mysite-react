import React from 'react';
import { arrayOf, shape } from 'prop-types';

const ChoiceList = ({ dataList }) => (
  <>
    <h2>Choice List</h2>
    <ul>
      {dataList.map(q => <li key={q.id}>{q.choiceText}</li>)}
      {dataList.length === 0 && <span>No choices</span>}
    </ul>
  </>
);

ChoiceList.propTypes = {
  dataList: arrayOf(shape({})),
};

ChoiceList.defaultProps = {
  dataList: [],
};

export default ChoiceList;
