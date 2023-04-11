import { FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector,} from "react-redux";
import { IRootState } from "../componentes/redux/store/store";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente"
import { eliminarTodosLosFavoritos } from "../componentes/redux/actions/favAction";
// import "./Favoritos.css"

/**
 * @param {eliminarTodosLosFavoritos} eliminarTodosLosFavoritos esta es una acción 
 * @param {TarjetaPersonaje} componente
 * 
 * @returns {React.ReactElement} JSX element
 */


const PaginaFavoritos: FC = () => {
  const dispatch = useDispatch();
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const mapaFavoritos = useSelector((state) => state.favoritos.mapaFavoritos);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={() => dispatch(eliminarTodosLosFavoritos())}>
          Eliminar todos los favoritos
        </button>
      </div>
      {mapaFavoritos.size === 0 ? (
        <>Sin favoritos</>
      ) : (
        <div className="tarjeta-favoritos">
          {Array.from(mapaFavoritos.values()).map((personaje, index) => {
            return (
              <div key={personaje.id}>
                <TarjetaPersonaje personaje={personaje} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PaginaFavoritos;