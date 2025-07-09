import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PokemonsState {
    favorites: { [key: string]: SimplePokemon },
}

// const getInitialState = (): PokemonsState => {
//     // Para que funcione en el BUILD.
//     // if (typeof window.localStorage === 'undefined') return {};
//     const favorites = JSON.parse(localStorage.getItem('favoritesPokemons') ?? '{}');
//     return favorites;
// }

const initialState: PokemonsState = {
    favorites: {},
    // ...getInitialState()
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritesPokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
            state.favorites = action.payload;
        },

        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state.favorites[id]) {
                delete state.favorites[id];
                // return;
            } else {
                state.favorites[id] = pokemon;
            }
            // No se debe usar el localStorage en el reducer, ya que esto puede causar problemas de rendimiento y de sincronización entre diferentes instancias de la aplicación.
            localStorage.setItem('favoritesPokemons', JSON.stringify(state.favorites));
        }
    }
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer