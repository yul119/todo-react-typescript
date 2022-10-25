import React from 'react';
import TodoItem from './TodoItem';

const Todos: React.FC = () => {
  return (
    <div className='w-full divide-y divide-stone-300'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default Todos;
