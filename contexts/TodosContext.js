import { createContext, useContext, useState } from 'react';

const TodosContext = createContext(null);

export const TodosContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 0, todo: 'drink water', done: false },
        { id: 1, todo: 'create grocery list', done: false }
    ]);
    const [id, setId] = useState(2);

    return (
        <TodosContext.Provider value={{ todos, setTodos, id, setId }}>
            {children}
        </TodosContext.Provider>
    );
};

export const useTodosContext = () => useContext(TodosContext);
