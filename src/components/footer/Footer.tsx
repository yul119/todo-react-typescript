import React from 'react';
import {
  ACTIVE_TODOS,
  ALL_TODOS,
  COMPLETED_TODOS,
} from '../../constant';
import { IFooterProps } from '../../interfaces';
import { pluralize } from '../../utils';

const Footer = (prop: IFooterProps) => {
  let typeShow = prop.typeShow;
  let todoLeft = `${prop.countTodo} ${pluralize(
    prop.countTodo,
    'item'
  )} left`;

  return (
    <div className='z-10 w-full h-[50px] px-[15px] text-[#777] text-sm flexCenter justify-between border-t-[1px] border-[#e6e6e6] relative before:footerBefore'>
      <p className='w-[30%]'>{todoLeft}</p>

      <div className='w-[40%] flexCenter '>
        <div
          className={`smBtn mr-1 ${
            typeShow === ALL_TODOS ? 'border-[#ead7d7]' : ''
          }`}
          onClick={() => prop.setTypeShow(ALL_TODOS)}
        >
          All
        </div>
        <div
          className={`smBtn mr-1 ${
            typeShow === ACTIVE_TODOS ? 'border-[#ead7d7]' : ''
          }`}
          onClick={() => prop.setTypeShow(ACTIVE_TODOS)}
        >
          Active
        </div>
        <div
          className={`smBtn ${
            typeShow === COMPLETED_TODOS ? 'border-[#ead7d7]' : ''
          }`}
          onClick={() => prop.setTypeShow(COMPLETED_TODOS)}
        >
          Completed
        </div>
      </div>

      <p
        className='cursor-pointer w-[30%] text-end'
        onClick={() => prop.clearCompletedTodo()}
      >
        {prop.showBtn() ? 'Clear completed' : ''}
      </p>
    </div>
  );
};

export default Footer;
