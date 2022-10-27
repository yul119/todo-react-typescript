export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface IAppState {
  todos: Array<ITodo>;
  editing: string;
  typeShow: string;
}

export interface IInputProp {
  addTodo(text: string);
  completedAllTodos();
}

export interface ITodoListProp {
  todos: Array<ITodo>;
  deleteTodo(id: string);
  checkTodo(id: string);
}

export interface ITodoItemProp {
  key: string;
  todo: ITodo;
  deleteTodo(id: string);
  checkTodo(id: string);
}

export interface IFooterProps {
  countTodo: number;
  typeShow: string;
  setTypeShow(type: string);
  clearCompletedTodo();
  showBtn();
}
