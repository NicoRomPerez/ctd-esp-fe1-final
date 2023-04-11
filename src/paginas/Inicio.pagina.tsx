import { FC } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../componentes/redux/actions/personajeAction";
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Pagina de inicio 
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio: FC  = () => {

    const dispatch = useDispatch();

    /**
     * Esta función limpia el filtro de busqueda
     */
    const eliminarFiltroOnClick = () => {
      dispatch(buscarPersonajesThunk(""));
    };


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={eliminarFiltroOnClick}>Limpiar filtro</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio