import React from 'react';
import { ITodoListProp } from '../../interfaces';
import TodoItem from './TodoItem';

const Todos = (prop: ITodoListProp): any => {
  // console.log(prop.todos);
  return (
    <div className='w-full divide-y divide-[#e6e6e6]'>
      {prop.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editing={prop.editing}
          deleteTodo={prop.deleteTodo}
          setEditing={prop.setEditing}
          updateTodo={prop.updateTodo}
          checkTodo={prop.checkTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
