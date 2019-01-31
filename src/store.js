import { store } from 'react-easy-state';

const appStore = store({
  questions: [],
  choices: [],
});

window.store = appStore;

export default appStore;
