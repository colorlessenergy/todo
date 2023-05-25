import { useState } from 'react';
import Head from 'next/head';

import AddTodo from '@/components/AddTodo';
import ListSelector from '@/components/ListSelector';
import ToggleAddList from '@/components/ToggleAddList';
import Todos from '@/components/Todos';

import { Roboto_Mono } from 'next/font/google';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
    const [addList, setAddList] = useState(false);

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
                <AddTodo addList={addList} setAddList={setAddList} />

                <div className="list-buttons">
                    <ListSelector />

                    <ToggleAddList addList={addList} setAddList={setAddList} />
                </div>

                <Todos />
            </div>
        </>
    );
}
