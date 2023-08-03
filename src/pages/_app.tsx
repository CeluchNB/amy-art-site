import type { AppProps } from 'next/app'
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className="flex min-h-screen flex-col items-center px-24">
            <Component {...pageProps} />
        </main>
    )
}    
   