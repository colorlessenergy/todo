import { useTodosContext } from '@/contexts/TodosContext';

const ListSelector = () => {
    const { todos, currentList, setCurrentList } = useTodosContext();

    return (
        <div>
            {todos.map(({ id, list }, index) => {
                return (
                    <button
                        key={id}
                        onClick={() => setCurrentList(index)}
                        className={`${
                            currentList === index ? 'text-underline' : ''
                        }`}>
                        {list}
                    </button>
                );
            })}
        </div>
    );
};

export default ListSelector;
