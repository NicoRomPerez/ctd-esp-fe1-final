import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import PaginaInfo from "../../../Types/page";
import Personaje from "../../../Types/personaje";
import { cambiarPagina, obtenerPersonajeAPI } from "../../../Services/personaje.service";


interface obtenerPersonajesAccion extends Action {
  type: "OBTENER_PERSONAJES";
  query: string;
}
interface obtenerPersonajesSuccessAccion extends Action {
    type: "OBTENER_PERSONAJES_SUCCESS";
    personajes: Personaje[];
    paginaInfo: PaginaInfo;
  }

interface obtenerPersonajesErrorAccion extends Action {
  type: "OBTENER_PERSONAJES_ERROR";
  error: string | number;
}

const obtenerPersonajes: ActionCreator<obtenerPersonajesAccion> = (query: string) => {
  return {
    type: "OBTENER_PERSONAJES",
    query: query,
  };
};

const obtenerPersonajesSuccess: ActionCreator<obtenerPersonajesSuccessAccion> = (
  personajes: Personaje[],
  paginaInfo: PaginaInfo
) => {
  return {
    type: "OBTENER_PERSONAJES_SUCCESS",
    personajes: personajes,
    paginaInfo: paginaInfo
  };
};

const obtenerPersonajesError: ActionCreator<obtenerPersonajesErrorAccion> = (
  mensaje: string | number
) => {
  return {
    type: "OBTENER_PERSONAJES_ERROR",
    error: mensaje,
  };
};

export type PersonajesActions =
  | ReturnType<typeof obtenerPersonajes>
  | ReturnType<typeof obtenerPersonajesSuccess>
  | ReturnType<typeof obtenerPersonajesError>;

interface BuscarPersonajesThunkAction
  extends ThunkAction<void, IRootState, unknown, PersonajesActions> {}


  /**
   * Esta función  OBTIENE los personajes de la API 
   * y dependiendo de los status se activara una acción 
  */

export const buscarPersonajesThunk = (
  query: string
): BuscarPersonajesThunkAction => {
  return async (dispatch, getState) => {
    dispatch(obtenerPersonajes(query));
    try {
      const response = await obtenerPersonajeAPI(query);
      const [personajes, info, status] = response;
      if (status === 200) {
        dispatch(obtenerPersonajesSuccess(personajes, info));
      } else {
        dispatch(obtenerPersonajesError(status));
      }
    } catch (e) {
      dispatch(obtenerPersonajesError(e));
    }
  };
};

/**
 * Esta función OBTIENE cierta cantidad de personajes por pagina 
 * 
 */

export const cambiarPaginaThunk = (url: string): BuscarPersonajesThunkAction => {
  return async (dispatch, getState) => {
    try {
      const [personajes, info] = await cambiarPagina(url);
      dispatch(obtenerPersonajesSuccess(personajes, info));
    } catch (e) {
      dispatch(obtenerPersonajesError(e));
    }
  };
};