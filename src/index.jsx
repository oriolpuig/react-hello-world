import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter/index.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello forCode!</p>
                <Counter />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
