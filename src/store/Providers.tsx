'use client';
import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoritesPokemons } from "./pokemons/pokemons/pokemons";


interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoritesPokemons') ?? '{}');
    store.dispatch(setFavoritesPokemons(favorites));
  }, []);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
