import { TodosContextProvider } from '@/contexts/TodosContext';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <TodosContextProvider>
            <Component {...pageProps} />
        </TodosContextProvider>
    );
}
