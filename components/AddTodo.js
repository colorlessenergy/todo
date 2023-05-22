import { useState } from 'react';

import { useTodosContext } from '@/contexts/TodosContext';

const AddTodo = () => {
    const { todos, setTodos, currentList, id, setId } = useTodosContext();

    const [input, setInput] = useState('');
    const handleInputChange = event => {
        setInput(event.currentTarget.value);
    };

    const handleOnKeyUp = event => {
        if (input === '') return;

        if (event.keyCode === 13) {
            let cloneTodos = JSON.parse(JSON.stringify(todos));
            cloneTodos[currentList].todos.push({
                id,
                todo: input,
                done: false
            });

            setTodos(cloneTodos);

            setInput('');

            setId(previousId => previousId + 1);
        }
    };

    return (
        <div>
            <label htmlFor="todo" className="d-none">
                todo
            </label>
            <input
                type="text"
                onChange={handleInputChange}
                onKeyUp={handleOnKeyUp}
                value={input}
                id="todo"
                name="todo"
            />
        </div>
    );
};

export default AddTodo;
