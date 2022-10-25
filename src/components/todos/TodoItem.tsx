import React from 'react';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const TodoItem: React.FC = () => {
  const todo = {
    id: 12,
    text: 'todo item',
    isCompleted: false,
  };

  return (
    <div className='w-full'>
      <div className='hidden w-full h-[60px] px-2 flexCenter justify-between group relative'>
        {todo.isCompleted ? (
          <BsCheckCircle
            className='w-[5%] text-4xl text-[#6cc8b6] cursor-pointer'
            onClick={() => (todo.isCompleted = false)}
          />
        ) : (
          <BsCircle
            className='w-[5%] text-4xl text-stone-300 cursor-pointer'
            onClick={() => (todo.isCompleted = true)}
          />
        )}

        <label
          className={`w-[95%] pl-6 text-2xl ${
            todo.isCompleted
              ? 'text-stone-300 line-through decoration-2 decoration-stone-300'
              : ''
          } `}
        >
          {todo.text}
        </label>
        <button className='hidden absolute right-3 group-hover:block'>
          <AiOutlineClose className='text-2xl text-red-300 hover:text-red-600' />
        </button>
      </div>

      <div className=' w-full h-[60px] pl-4 flexCenter justify-end'>
        <input
          className='w-[95%] pl-6 h-full text-2xl focus:outline-none focus:ring-inset focus:border-stone-600 focus:ring-stone-600 focus:ring-1'
          value={todo.text}
          autoFocus={true}
        />
      </div>
    </div>
  );
};

export default TodoItem;
