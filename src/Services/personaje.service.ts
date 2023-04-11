import Personaje from "../Types/personaje";
import PaginaInfo from "../Types/page";
/**
 * Retorna todos los personajes para poder ser filtrados y buscar por nombre
 *
 * @param {string | undefined} name
 * @returns {Promise<[Personaje[], PaginaInfo, number] | [any, any, number]>} retorna personajes
 */
export const obtenerPersonajeAPI = async (
  name?: string
): Promise<[Personaje[], PaginaInfo, number] | [any, any, number]> => {
  let nameParam = "";
  if (name !== "" && name !== undefined) {
    nameParam = `name=${name}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character?${nameParam}`).then(
    function (response) {
      return response
        .json()
        .then((data) => [data.results, data.info, response.status]);
    }
  );
};

/**
 *  Esta función retorna una cantidad de personajes por página 
 *
 * @param {string }url
 * @returns {Promise<[Personaje[], PaginaInfo]>} retorna el personaje
 */
export const cambiarPagina = async (
  url: string
): Promise<[Personaje[], PaginaInfo]> => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};