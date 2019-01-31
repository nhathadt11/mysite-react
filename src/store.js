import { store } from 'react-easy-state';

const appStore = store({
  questions: [],
});

window.store = appStore;

export default appStore;
