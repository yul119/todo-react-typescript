import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Todos from './components/todos/Todos';

const App: React.FC = () => {
  return (
    <div className='w-screen h-screen pb-[200px] flexCenter flex-col'>
      <div className='flexCenter flex-col'>
        <Header />
        <div className='w-[550px] h-auto flexCenter flex-col border-[1px] border-stone-300 shadow-lg shadow-indigo-500/40'>
          <Input />
          <Todos />
          <Footer typeShow='All' />
        </div>
      </div>
    </div>
  );
};
export default App;
