import Head from 'next/head';

import { Roboto_Mono } from 'next/font/google';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
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
                        <button className="text-underline">today</button>
                        <button>tomorrow</button>
                    </div>

                    <button>+</button>
                </div>

                <div className="todo">
                    <input type="checkbox" id="todo-1" name="todo-1" />
                    <label htmlFor="todo-1" className="checkbox-input"></label>
                    <label htmlFor="todo-1">drink water</label>
                </div>

                <div className="todo">
                    <input type="checkbox" id="todo-2" name="todo-2" />
                    <label htmlFor="todo-2" className="checkbox-input"></label>
                    <label htmlFor="todo-2">create grocery list</label>
                </div>
            </div>
        </>
    );
}
