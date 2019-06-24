import { replace, goBack as gb } from "connected-react-router";
//import { api } from '../../shared'
import provider_factory from "../provider.faker";

export const REQUEST_REMOVE_PROVIDER = "PROVIDER/REMOVE/REQUEST_PROVIDER";
export const RESPONSE_REMOVE_PROVIDER = "PROVIDER/REMOVE/RESPONSE_PROVIDER";
export const ERROR_REMOVE_PROVIDER = "PROVIDER/REMOVE/ERROR_PROVIDER";

export const LOAD_REMOVE_PROVIDER = "PROVIDER/REMOVE/LOAD_REMOVE_PROVIDER";
export const LOADED_REMOVE_PROVIDER = "PROVIDER/REMOVE/LOADED_REMOVE_PROVIDER";
export const LOADED_ERROR_PROVIDER = "PROVIDER/REMOVE/LOADED_ERROR_PROVIDER";

let initialState = {
  element: null,
  error: null,
  isOpen: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_REMOVE_PROVIDER:
      return { ...initialState };
    case LOADED_REMOVE_PROVIDER:
      return { ...state, element: action.payload, isOpen: true };
    case LOADED_ERROR_PROVIDER:
      return { ...state, element: null, error: action.error };
    case REQUEST_REMOVE_PROVIDER:
      return { ...state };
    case RESPONSE_REMOVE_PROVIDER:
      return { ...state, element: null };
    case ERROR_REMOVE_PROVIDER:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export const load = id => (dispatch, state) => {
  dispatch({ type: LOAD_REMOVE_PROVIDER });
  dispatch({ type: LOADED_REMOVE_PROVIDER, payload: provider_factory() });
  // api.get(`/provider/${id}`)
  //     .then(res => {
  //         let element = res.data
  //         if (element) {
  //             dispatch({ type: LOADED_REMOVE_PROVIDER, payload: element })
  //         } else {
  //             dispatch(replace('/provider'));
  //             toast.warn("No se puede elimiar el proveedor seleccionado")
  //         }
  //     })
};

export const remove = id => (dispatch, state) => {
  dispatch({ type: REQUEST_REMOVE_PROVIDER });

  let element = state().provider.remove.element;

  let location = { pathname: "/provider", removed: element.id };
  dispatch(replace(location));

  // api.delete(`provider/${element.id}`)
  //     .then(response => {
  //         toast.success("Elemento eliminado")
  //         dispatch({ type: RESPONSE_REMOVE_PROVIDER, payload: element })
  //         let location = { pathname: "/provider", removed: element.id }
  //         dispatch(replace(location))
  //     }).catch(() => {
  //         toast.error("Error al eliminar proveedor")
  //     })
};

export const goBack = () => dispatch => {
  // TODO: mensaje cancelada
  dispatch({ type: LOAD_REMOVE_PROVIDER });
  dispatch(gb("/provider"));
};
