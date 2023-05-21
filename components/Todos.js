import { useTodosContext } from '@/contexts/TodosContext';

const Todos = () => {
    const { todos } = useTodosContext();

    return todos.map(({ id, todo }) => {
        return (
            <div key={id} className="todo">
                <input type="checkbox" id={`todo-${id}`} name={`todo-${id}`} />
                <label
                    htmlFor={`todo-${id}`}
                    className="checkbox-input"></label>
                <label htmlFor={`todo-${id}`}>{todo}</label>
            </div>
        );
    });
};

export default Todos;
