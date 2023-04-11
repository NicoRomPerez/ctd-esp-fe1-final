import { FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector, } from "react-redux";
import { IRootState } from "../redux/store/store";
import Personaje from "../../Types/personaje";
import { todosFavoritos } from "../redux/actions/favAction";
import './boton-favorito.css';


/**
 * Esta funcion hace que un personaje tenga el estado de favorito
 *
 * @param {Personaje} Personaje
 * @returns {React.ReactElement} JSX element
 *
 */
const BotonFavorito: FC<{ personaje: Personaje }> = ({ personaje }) => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const mapaFavoritos = useSelector((state) => state.favoritos.mapaFavoritos);
  const dispatch = useDispatch();

  const src = require(mapaFavoritos.has(personaje.id)
    ? "../../images/estrella-Amarilla.png"
    : "../../images/estrella.png" );

  /**
   * Esta función hace que una card pase de ser favorito a no favorito
   * @param {event} evento 
   */
  const  todosFavorito  = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch( todosFavoritos (personaje));
  };

  return (
    <button className="boton-favorito" onClick={ todosFavorito } type="button">
      <img src={src} alt={"favorito"} />
    </button>
  );
};

export default BotonFavorito;