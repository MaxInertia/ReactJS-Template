/**
 * Created by Doria on 2017-07-03.
 */

console.log('Hello World!');

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p> Hello World!</p>;
    }
}

render(<App/>, document.getElementById('app'));