import React from 'react';
import { view } from 'react-easy-state';
import ChoiceForm from '../components/ChoiceForm';
import store from '../store';

export default view(props => <ChoiceForm {...props} questions={store.questions} />);
