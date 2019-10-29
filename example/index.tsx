import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Thing2 } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <Thing2 />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
