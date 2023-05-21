import Head from 'next/head';

import Todos from '@/components/Todos';
import { useTodosContext } from '@/contexts/TodosContext';

import { Roboto_Mono } from 'next/font/google';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
    const { todos, currentList, setCurrentList } = useTodosContext();

    return (
        <>
            <Head>
                <title>todo</title>
                <meta name="description" content="todo" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={roboto_mono.className + ' container'}>
                <div>
                    <label htmlFor="todo" className="d-none">
                        todo
                    </label>
                    <input type="text" id="todo" name="todo" />
                </div>
                <div className="list-buttons">
                    <div>
                        {todos.map(({ id, list }, index) => {
                            return (
                                <button
                                    key={id}
                                    onClick={() => setCurrentList(index)}
                                    className={`${
                                        currentList === index
                                            ? 'text-underline'
                                            : ''
                                    }`}>
                                    {list}
                                </button>
                            );
                        })}
                    </div>

                    <button>+</button>
                </div>

                <Todos />
            </div>
        </>
    );
}
