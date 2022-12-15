import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export type TodoData = Pick<Todo, 'title' | 'completed' | 'userId'>;

export const createTodo = (todo: TodoData) => {
  return client.post<Todo>('/todos', todo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = (todoId: number, dataToUpdate: Partial<Todo>) => {
  return client.patch(`/todos/${todoId}`, dataToUpdate);
};
