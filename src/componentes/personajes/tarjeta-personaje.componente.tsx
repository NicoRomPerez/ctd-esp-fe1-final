import { FC } from "react";
import Personaje from "../../Types/personaje";
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta Personaje
 *
 * @param {Personaje} personaje
 * @returns {React.ReactElement} JSX element
 */
const TarjetaPersonaje: FC<{ personaje: Personaje }> = ({ personaje }) => {


  return (
    <div className="tarjeta-personaje">
      <img src={personaje.image} alt={personaje.name} />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito personaje={personaje} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;