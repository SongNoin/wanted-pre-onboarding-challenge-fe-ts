interface ITodo {
  id: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}
interface INewTodo {
  content: string;
  category: string;
  tags?: string[];
}
interface IUpdateTodo {
  content?: string;
  isDone?: boolean;
  category?: string;
}

interface ICreateTodo {
  (todo: INewTodo);
}

interface IGetTodos {
  (): ITodo[];
}

interface IGetTodoById {
  (id: number): ITodo;
}

interface IUpdateTodo {
  (todo: IUpdateTodo);
}

interface IUpdateTag {
  (id: number, tag: string, newTag: string);
}

interface IDeleteTodoById {
  (id: number);
}

interface IDeleteTag {
  (id: number, tag: string);
}

interface IDeleteAllTag {
  (id: number);
}

const createTodo: ICreateTodo = (todo) => {};

const getTodos: IGetTodos = () => {};

const getTodoById: IGetTodoById = (id) => {};

const updateTodo: IUpdateTodo = (todo) => {};

const updateTag: IUpdateTag = (id, tag, newTag) => {};

const deleteTodoById: IDeleteTodoById = (id) => {};

const deleteAllTodo = () => {};

const deleteTag: IDeleteTag = (id, tag) => {};

const deleteAllTag: IDeleteAllTag = (id) => {};
