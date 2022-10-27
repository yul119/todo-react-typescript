import React, { useState } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { ENTER_KEY } from '../../constant';
import { IInputProp } from '../../interfaces';

const Input = (prop: IInputProp) => {
  let input: string;
  let setInput: any;
  [input, setInput] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInput(event.target.value);
  };

  const handleSubmit = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): any => {
    if (event.which === ENTER_KEY)
      if (input.trim() !== '') {
        prop.addTodo(input);
        setInput('');
      }
  };

  return (
    <div className='w-full flexCenter px-2 justify-between border-b-[1px] border-[#e6e6e6]'>
      <IoIosArrowDown
        className='w-[5%] text-4xl text-stone-300 font-black cursor-pointer'
        onClick={() => prop.completedAllTodos()}
      />
      <input
        className='w-[95%] pl-6 bg-[#fff] text-[#4d4d4d] placeholder:italic placeholder:text-2xl placeholder:text-stone-300 text-2xl py-4 border-none focus:outline-none'
        placeholder='What needs to be done?'
        type='text'
        value={input}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default Input;
