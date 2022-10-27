import React, { useState } from 'react';
import { BsCircle } from 'react-icons/bs';
import { SlCheck } from 'react-icons/sl';
import { AiOutlineClose } from 'react-icons/ai';
import { ITodoItemProp } from '../../interfaces';
import { ENTER_KEY } from '../../constant';

const TodoItem = (prop: ITodoItemProp): any => {
  const todo = prop.todo;
  let text: string;
  let setText: any;
  [text, setText] = useState(todo.text);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const handleSubmit = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): any => {
    if (event.which === ENTER_KEY)
      if (text.trim() !== '') {
        prop.updateTodo(todo.id, text);
        prop.setEditing('');
        setText(todo.text);
      }
  };

  return (
    <div className='w-full'>
      {prop.editing === todo.id ? (
        <div className=' w-full h-[60px] pl-4 flexCenter justify-end'>
          <input
            className='w-[95%] pl-6 h-full text-2xl focus:outline-none focus:ring-inset focus:border-stone-600 focus:ring-stone-600 focus:ring-1'
            value={text}
            autoFocus={true}
            onChange={handleChange}
            onKeyDown={handleSubmit}
          />
        </div>
      ) : (
        <div className='w-full h-[60px] px-2 flexCenter justify-between group relative'>
          {todo.isCompleted ? (
            <SlCheck
              className='w-[5%] text-4xl text-[#6cc8b6] cursor-pointer'
              onClick={() => prop.checkTodo(todo.id)}
            />
          ) : (
            <BsCircle
              className='w-[5%] text-4xl text-[#d9d9d9] cursor-pointer'
              onClick={() => prop.checkTodo(todo.id)}
            />
          )}

          <label
            className={`w-[95%] pl-6 text-2xl  ${
              todo.isCompleted
                ? 'text-[#d9d9d9] line-through decoration-2 decoration-stone-300'
                : 'text-[#4d4d4d]'
            } `}
            onDoubleClick={() => prop.setEditing(todo.id)}
          >
            {todo.text}
          </label>
          <button
            className='hidden absolute right-[10px] group-hover:block'
            onClick={() => prop.deleteTodo(todo.id)}
          >
            <AiOutlineClose className='text-xl text-[#cc9a9a] hover:text-[#af5b5e] ease-out duration-200 ' />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
