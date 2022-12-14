import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Todos from './components/todos/Todos';
import {
  ACTIVE_TODOS,
  ALL_TODOS,
  COMPLETED_TODOS,
  LOCAL_STORE,
} from './constant';
import { IAppState, ITodo } from './interfaces';
import { localStore, uuid } from './utils';

const App: React.FC = () => {
  const allTodos = localStore(LOCAL_STORE) as Array<ITodo>;
  const completedTodo = allTodos.filter(
    (todo) => todo.isCompleted === true
  );
  const activeTodo = allTodos.filter(
    (todo) => todo.isCompleted !== true
  );

  let store: IAppState;
  let setStore: any;
  [store, setStore] = useState({
    todos: allTodos,
    editing: '',
    typeShow: ALL_TODOS,
  });
  useEffect(() => {
    if (store.typeShow === ALL_TODOS)
      setStore({ ...store, todos: allTodos });
    if (store.typeShow === ACTIVE_TODOS)
      setStore({ ...store, todos: activeTodo });
    if (store.typeShow === COMPLETED_TODOS)
      setStore({ ...store, todos: completedTodo });
  }, [store.typeShow]);

  const addTodo = (text: string): void => {
    const newTodo: ITodo = {
      id: uuid(),
      text,
      isCompleted: false,
    };
    const newStore = { ...store, todos: [...store?.todos, newTodo] };
    // update state
    setStore({ ...newStore });
    // update db
    localStore(LOCAL_STORE, newStore.todos);
  };

  const deleteTodo = (id: string): void => {
    const deletedTodo = store.todos.filter((todo) => todo.id !== id);
    const newStore = { ...store, todos: deletedTodo };
    // update state
    setStore({ ...newStore });
    // update db
    localStore(LOCAL_STORE, newStore.todos);
  };

  const checkTodo = (id: string): void => {
    const checkedTodo = store.todos.map((todo) =>
      todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );
    const newStore = { ...store, todos: checkedTodo };
    // update state
    setStore({ ...newStore });
    // update db
    localStore(LOCAL_STORE, newStore.todos);
  };

  const setEditing = (id: string): void => {
    setStore({ ...store, editing: id });
  };

  const updateTodo = (id: string, text: string): void => {
    const updatedTodo = store.todos.map((todo) => {
      console.log({ old: todo.text, new: text });
      return todo.id === id ? { ...todo, text: text } : todo;
    });
    const newStore = { ...store, todos: updatedTodo };
    // update state
    setStore({ ...newStore });
    // update db
    localStore(LOCAL_STORE, newStore.todos);
  };

  const completedAllTodos = (): void => {
    const doneAllTodo = store.todos.map((todo) => {
      return {
        ...todo,
        isCompleted:
          completedTodo.length === allTodos.length ? false : true,
      };
    });
    const newStore = { ...store, todos: doneAllTodo };
    // update state
    setStore({ ...newStore });
    // update db
    localStore(LOCAL_STORE, newStore.todos);
  };

  const clearCompletedTodo = (): void => {
    const clearCompleted = store.todos.filter(
      (todo) => todo.isCompleted === false
    );
    const newStore = { ...store, todos: clearCompleted };
    // update state
    setStore({ ...newStore });
    // update db
    localStore(LOCAL_STORE, newStore.todos);
  };

  const setTypeShow = (type: string): void => {
    setStore({ ...store, typeShow: type });
  };

  const showBtnClearCompleted = (): boolean =>
    completedTodo.length !== 0;

  return (
    <div className='w-screen h-screen flexCenter flex-col justify-start bg-[#f5f5f5]'>
      <div className='flexCenter flex-col mx-auto w-[550px] relative '>
        <Header />
        <div className='w-full h-auto flexCenter flex-col justify-start bg-[#fff] appBoxShadow'>
          <Input
            addTodo={addTodo}
            completedAllTodos={completedAllTodos}
          />
          <Todos
            todos={store.todos}
            editing={store.editing}
            deleteTodo={deleteTodo}
            setEditing={setEditing}
            updateTodo={updateTodo}
            checkTodo={checkTodo}
          />
          {allTodos.length > 0 && (
            <Footer
              countTodo={activeTodo.length}
              typeShow={store.typeShow}
              clearCompletedTodo={clearCompletedTodo}
              setTypeShow={setTypeShow}
              showBtn={showBtnClearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
