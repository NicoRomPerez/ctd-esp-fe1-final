import { Reducer } from "@reduxjs/toolkit";
import { PersonajesActions } from "../actions/personajeAction";
import Personaje from "../../../Types/personaje";
import page from "../../../Types/page";

interface PersonajesState {
  status: "INACTIVO" | "CARGANDO" | "COMPLETADO" | "ERROR";
  personajes: Personaje[];
  query: string;
  paginaInfo: page,
  error: string | number | null;
}

const initialState: PersonajesState = {
  status: "INACTIVO",
  personajes: [],
  query: "",
  paginaInfo:  {count: 0, pages: 0, next: "", prev: "" },
  error: null,
};

/**
 * Pesonajes reducer
 * @param {State} state
 * @param {DataStore.Reducer<PesonajessState, PersonajesActions>} accion
 * @returns {State}
 */


const personajesReducer: Reducer<PersonajesState, PersonajesActions> =
(state = initialState, action): PersonajesState => {
  switch (action.type) {
    case "OBTENER_PERSONAJES":
      return {
        ...state,
        status: "CARGANDO",
        personajes: [],
        query: action.query,
        error: null,
      };
    case "OBTENER_PERSONAJES_SUCCESS":
      return {
        ...state,
        status: "COMPLETADO",
        personajes: action.personajes,
        paginaInfo: action.paginaInfo,
      };
    case "OBTENER_PERSONAJES_ERROR":
      return {
        ...state,
        status: "ERROR",
        personajes: [],
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default personajesReducer;