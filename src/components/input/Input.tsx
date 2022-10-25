import React from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';

const Input: React.FC = () => {
  return (
    <div className='w-full flexCenter px-2 justify-between border-b-[1px] border-stone-300'>
      <BsChevronCompactDown className='w-[5%] text-4xl text-stone-300 font-black cursor-pointer' />
      <input
        className='w-[95%] pl-6 placeholder:italic placeholder:text-2xl placeholder:text-stone-300 text-2xl py-4 border-none focus:outline-none'
        placeholder='What needs to be done?'
      />
    </div>
  );
};

export default Input;
