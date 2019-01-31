import React from 'react';
import { view } from 'react-easy-state';
import store from '../store';
import QuestionList from '../components/QuestionList';

export default view(props => <QuestionList {...props} dataList={store.questions} />);
