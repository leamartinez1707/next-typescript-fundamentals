'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartHalfOutline } from "react-icons/io5";

export const PokemonsFavorite = () => {
    const favoritesPokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));

    return (

        <>
            {favoritesPokemons.length === 0 ?
                (<NoFavorites />) :
                (<PokemonGrid pokemons={favoritesPokemons} />)}
        </>
    )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartHalfOutline size={100} className="text-blue-500 text-center" />
            <span className="text-5xl my-2">No Favorites</span>
        </div>
    );
}
