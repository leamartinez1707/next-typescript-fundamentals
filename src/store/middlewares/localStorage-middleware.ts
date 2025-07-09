import { MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit"
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);
        if (action.type === "pokemons/addPokemon") {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem("favoritePokemons", JSON.stringify(pokemons));
            return;
        }
    }
}