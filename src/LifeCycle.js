import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  render() {
    console.log('render');
    return <div>Render Component</div>;
  }
}

export default LifeCycle;
