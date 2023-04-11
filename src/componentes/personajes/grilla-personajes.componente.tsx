import { FC, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector, } from "react-redux";
import { IRootState } from "../redux/store/store";
import { buscarPersonajesThunk } from "../redux/actions/personajeAction";
import TarjetaPersonaje from './tarjeta-personaje.componente';
import './grilla-personajes.css';
import type {} from 'redux-thunk/extend-redux';


/**
 * Personajes por pagina
 *
 * @returns {React.ReactElement} JSX element
 */
const GrillaPersonajes: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const { status, personajes } = useSelector((state) => state.personajes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarPersonajesThunk(""));
  }, [dispatch]);

  if (status === "CARGANDO") return <div>Cargando personajes...</div>;
  if (status === "ERROR") return <div>Este personaje no se encuentra</div>;
  if (!personajes || personajes.length === 0) return <></>;

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje) => {
        return (
          <div key={personaje.id}>
            <TarjetaPersonaje personaje={personaje} />
          </div>
        );
      })}
    </div>
  );
};

export default GrillaPersonajes;