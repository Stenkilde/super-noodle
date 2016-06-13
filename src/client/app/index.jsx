import React from 'react';
import {render} from 'react-dom';
import {
    Router,
    Route,
    Link
} from 'react-router'

class App extends React.Component {
  render () {
    return(
        <div>
            <p> Hello React!</p>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
