import { FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector,} from "react-redux";
import { cambiarPaginaThunk } from "../redux/actions/personajeAction";
import { IRootState } from "../redux/store/store";
import './paginacion.css';

/**
 * Pagination component
 *
 * @returns {React.ReactElement} JSX element
 */
const Paginacion: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const dispatch = useDispatch();

  const paginaInfo = useSelector((state) => state.personajes.paginaInfo);
  const { next,  prev } = paginaInfo;

  const paginaAnterior = () => {
    dispatch(cambiarPaginaThunk(prev));
  };

  const paginaSiguiente = () => {
    dispatch(cambiarPaginaThunk(next));
  };

  return (
    <div className="paginacion">
      <button
        onClick={paginaAnterior}
        disabled={prev === null ? true : false}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={paginaSiguiente}
        disabled={next === null ? true : false}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;