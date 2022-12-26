import { nanoid } from 'nanoid';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useTodos = create(
  persist(
    devtools((set, get) => ({
      todos: [],
      loading: false,
      error: null,

      addTodo: title => {
        set({
          todos: [...get().todos, { id: nanoid(), title, completed: false }],
        });
      },

      toggleTodo: todoId =>
        set({
          todos: get().todos.map(todo =>
            todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
          ),
        }),

      removeTodo: todoId =>
        set(state => ({
          todos: get().todos.filter(todo => todo.id !== todoId),
        })),

      fetchTodos: async () => {
        set({ loading: true });

        try {
          const res = await fetch(
            'https://jsonplaceholder.typicode.com/todos?_limit=5'
          );

          if (!res.ok)
            throw new Error(
              'Failed to fetch! Check connection to jsonplaceholder'
            );

          set({ todos: await res.json(), error: null });
        } catch (err) {
          set({ error: err.message });
        } finally {
          set({ loading: false });
        }
      },
    }))
  )
);

export const useFilter = create((set, get) => ({
  fitler: 'all',
  setFilter: value => set({ filter: value }),
}));
