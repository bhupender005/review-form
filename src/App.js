import React from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import FormPreview from './components/FormPreview/FormPreview';

function App() {

  return (
    <div className="App">
      <ReviewForm />
      <FormPreview />
    </div>
  );
}

export default App;
