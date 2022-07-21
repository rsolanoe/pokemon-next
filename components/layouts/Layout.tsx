import { FC, ReactNode, useEffect } from 'react';
import Head from "next/head"
import { NavBar } from '../ui';

interface Props {
    children: ReactNode
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {

    const origin = typeof window === 'undefined' ? '' : window.location.origin
    

    return (
        <>
            <Head>
                <title>{ title || 'PokemonApp'}</title>
                <meta name="author" content='Rodolfo Solano' />
                <meta name="description" content={`Información sobre el pokémon xxx ${ title }`} />
                <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
                <meta property="og:title" content={`Información sobre el pokemon ${ title }`} />
                <meta property="og:description" content={ `Esta es la pagina sobre ${ title }` } />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <NavBar />

            <main style={{
                padding: '0 20px'
            }}
            >
                { children }
            </main>
        </>
    )
}