import { Reducer } from "@reduxjs/toolkit";
import { FavoritoActions } from "../actions/favAction";
import Personaje from "../../../Types/personaje";


interface StateFavoritos {
  mapaFavoritos: Map<number, Personaje>;
}

const initialState: StateFavoritos = {
    mapaFavoritos: new Map(),
};

const favoritosReducer: Reducer<StateFavoritos, FavoritoActions> = (
  state = initialState,
  action
): StateFavoritos => {
  switch (action.type) {
    case "TODOS_FAVORITOS":
      const map = new Map<number, Personaje>();
      state.mapaFavoritos.forEach((personaje) => {
        map.set(personaje.id, personaje);
      });

      state.mapaFavoritos.has(action.personaje.id)
        ? map.delete(action.personaje.id)
        : map.set(action.personaje.id, action.personaje);
      return {
        ...state,
        mapaFavoritos: map,
      };

    case "ELIMINAR_TODOS_FAVORITOS":
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};

export default favoritosReducer;
