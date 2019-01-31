import React from 'react';
import { view } from 'react-easy-state';
import store from '../store';
import ChoiceList from '../components/ChoiceList';

export default view(props => <ChoiceList {...props} dataList={store.choices} />);
