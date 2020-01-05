import React, { useState, useCallback } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import FormPreview from './components/FormPreview/FormPreview';
import { getDataFor } from "./utilities/Api";

function App() {
  const checkFormDataSubmited = getDataFor('villaName');
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <div className="App">
      {checkFormDataSubmited ?  <FormPreview forceUpdate={forceUpdate} /> : <ReviewForm forceUpdate={forceUpdate} />}
    </div>
  );
}

export default App;
