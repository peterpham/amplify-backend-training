import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react'

import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';

const addTodo = async () => {
  const todo = { name: `My todo ${new Date().getTime()}`, description: "Hello world!" };
  await API.graphql(graphqlOperation(createTodo, {input: todo}));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={addTodo}>Add todo</button>
      </header>
    </div>
  );
}

// export default App;
export default withAuthenticator(App)