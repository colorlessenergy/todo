import Head from 'next/head';

import AddTodo from '@/components/AddTodo';
import ListSelector from '@/components/ListSelector';
import Todos from '@/components/Todos';

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
                <AddTodo />

                <div className="list-buttons">
                    <ListSelector />

                    <button>+</button>
                </div>

                <Todos />
            </div>
        </>
    );
}
