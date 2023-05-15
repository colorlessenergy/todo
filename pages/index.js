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
            <div className={roboto_mono.className}></div>
        </>
    );
}
