import React from 'react';

const Footer = ({ typeShow }: any) => {
  return (
    <div className='w-full h-[50px] px-2 text-stone-400 text-sm flexCenter justify-between border-t-[1px] border-stone-300'>
      <p className=''>2 items left</p>

      <div className='flexCenter '>
        <div
          className={`smBtn mr-1 ${
            typeShow === 'All' ? 'border-[1px]' : ''
          }`}
        >
          All
        </div>
        <div
          className={`smBtn mr-1 ${
            typeShow === 'Active' ? 'border-[1px]' : ''
          }`}
        >
          Active{' '}
        </div>
        <div
          className={`smBtn ${
            typeShow === 'Active' ? 'border-[1px]' : ''
          }`}
        >
          Completed
        </div>
      </div>

      <p className='cursor-pointer'>Clear completed</p>
    </div>
  );
};

export default Footer;
