export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export const mockData: Todo[] = [
  {
    id: 1,
    text: 'todo one',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'todo 2',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'todo 3',
    isCompleted: true,
  },
  {
    id: 4,
    text: 'todo 4',
    isCompleted: true,
  },
  {
    id: 5,
    text: 'todo 5',
    isCompleted: false,
  },
];
