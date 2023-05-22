import { useTodosContext } from '@/contexts/TodosContext';

const Todos = () => {
    const { todos, setTodos, currentList } = useTodosContext();

    const handleTodoChange = index => {
        let cloneTodos = JSON.parse(JSON.stringify(todos));
        cloneTodos[currentList].todos[index].done =
            !cloneTodos[currentList].todos[index].done;

        setTodos(cloneTodos);
    };

    return todos[currentList].todos.map(({ id, todo, done }, index) => {
        return (
            <div key={id} className="todo">
                <input
                    type="checkbox"
                    onChange={() => handleTodoChange(index)}
                    id={`todo-${id}`}
                    name={`todo-${id}`}
                    checked={done}
                />
                <label
                    htmlFor={`todo-${id}`}
                    className="checkbox-input"></label>
                <label htmlFor={`todo-${id}`}>{todo}</label>
            </div>
        );
    });
};

export default Todos;
