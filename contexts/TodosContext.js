import { createContext, useContext, useState } from 'react';

const TodosContext = createContext(null);

export const TodosContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 0,
            list: 'today',
            todos: [
                { id: 1, todo: 'drink water', done: false },
                { id: 2, todo: 'create grocery list', done: false }
            ]
        },
        {
            id: 3,
            list: 'tomorrow',
            todos: [
                { id: 4, todo: 'create grocery list', done: false },
                { id: 5, todo: 'drink water', done: false }
            ]
        }
    ]);
    const [currentList, setCurrentList] = useState(0);
    const [id, setId] = useState(6);

    return (
        <TodosContext.Provider
            value={{ todos, setTodos, currentList, setCurrentList, id, setId }}>
            {children}
        </TodosContext.Provider>
    );
};

export const useTodosContext = () => useContext(TodosContext);
