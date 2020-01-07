import React, { useState, useCallback } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import FormPreview from './components/FormPreview/FormPreview';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const state = store.getState();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <div className="App">
      <Provider store={store}>
        {state.villaName ?  <FormPreview forceUpdate={forceUpdate} /> : <ReviewForm forceUpdate={forceUpdate} />}
      </Provider>
    </div>
  );
}

export default App;
