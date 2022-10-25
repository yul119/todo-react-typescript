import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Todos from './components/todos/Todos';

const App: React.FC = () => {
  return (
    <div className='flexCenter flex-col mt-[100px]'>
      <Header />
      <div className='w-[550px] h-auto flexCenter flex-col justify-start border-[1px] border-stone-300 shadow-lg shadow-indigo-500/40'>
        <Input />
        <Todos />
        <Footer typeShow='All' />
      </div>
    </div>
  );
};
export default App;
