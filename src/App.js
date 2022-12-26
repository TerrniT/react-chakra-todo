import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Hero from './components/Hero';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <NewTodo />
      <TodoList />
    </Layout>
  );
}

export default App;
