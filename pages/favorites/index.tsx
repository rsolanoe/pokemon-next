import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils';

const FavoritePage = () => {


    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
    const router = useRouter()

    const onClick = ( id: number ) => {
        router.push(`/pokemon/${ id }`)
    }


    useEffect(() => {
        
        setFavoritePokemons( localFavorites.pokemons() )

    }, [])
    

    return (
        <Layout title='Pokemon - Favoritos'>

            {
                favoritePokemons.length === 0 
                    ? <NoFavorites />
                    : (
                        <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
                            {
                                favoritePokemons.map( id => (
                                    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } onClick={( ) => onClick( id ) }>
                                        <Card isHoverable isPressable css={{ padding: 10 }}>
                                            <Card.Image 
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                                                width={ '100%' }
                                                height={ 140 }
                                            />
                                        </Card>
                                    </Grid>
                                )) 
                            }
                        </Grid.Container>
                    )
            }
            

        </Layout>
    )
}

export default FavoritePage