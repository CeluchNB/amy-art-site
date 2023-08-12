'use client';
import { useEffect, useMemo, useState } from 'react'

type Quote = {
    quote: string
    author: string
}

const quotes: Quote[] = [
    { quote: 'A picture is a open without words.', author: 'Horace' },
    { quote: 'You don\'t take a photograph, you make it.', author: 'Ansel Adams' },
    { quote: 'Every human is an artist. The dream of your life is to make beautiful art.', author: 'Don Miguel Ruiz' },
    { quote: 'Art is not a thing; it is a way.', author: 'Elbert Hubbard' },
    { quote: 'I prefer drawing to talking. Drawing is faster, and leaves less room for lies.', author: 'Le Corbusier' },
]

export const QuoteDisplay = () => {

    const [loaded, setLoaded] = useState(false)

    const quote = useMemo(() => {
        const idx = Math.floor(Math.random() * 5);
        return quotes[idx]
    }, [])

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div className={`transition-opacity duration-500 h-16 ease-in ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            {loaded && 
                (
                    <>
                        <p className="font-serif text-lg">{quote.quote}</p>
                        <p className="font-quote text-xl text-end">- {quote.author}</p>
                    </>
                )
            }
        </div>
    )
}

export default QuoteDisplay
