import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './LifeCycle.js';

import './styles.css';

function App() {
  return <LifeCycle />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
