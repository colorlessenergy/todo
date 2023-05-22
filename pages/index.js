import Head from 'next/head';

import Todos from '@/components/Todos';
import ListSelector from '@/components/ListSelector';

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
                    <ListSelector />

                    <button>+</button>
                </div>

                <Todos />
            </div>
        </>
    );
}
