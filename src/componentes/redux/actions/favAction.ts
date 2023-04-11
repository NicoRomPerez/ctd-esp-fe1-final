import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../../../Types/personaje";

interface TodosFavoritosAction extends Action {
  type: "TODOS_FAVORITOS";
  personaje: Personaje;
}

interface EliminarTodosLosFavoritosAction extends Action {
  type: "ELIMINAR_TODOS_FAVORITOS";
}

export const todosFavoritos: ActionCreator<TodosFavoritosAction> = (personaje: Personaje ) => ({
  type: "TODOS_FAVORITOS",
  personaje,
});

export const eliminarTodosLosFavoritos: ActionCreator< EliminarTodosLosFavoritosAction> = () => ({
  type: "ELIMINAR_TODOS_FAVORITOS",
});

export type FavoritoActions =
  | ReturnType<typeof todosFavoritos>
  | ReturnType<typeof eliminarTodosLosFavoritos>;