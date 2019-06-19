import { replace } from "connected-react-router";
import { toast } from "react-toastify";
import provider_factory from "../provider.faker";
//import { api } from '../../shared'

export const LOAD_ELEMENT = "PROVIDER/UPDATE/LOAD_CREATE_ELEMENT";
export const LOADED_ELEMENT = "PROVIDER/UPDATE/LOADED_CREATE_ELEMENT";

export const REQUEST_UPDATE_ELEMENT = "PROVIDER/UPDATE/REQUEST_PROVIDER";
export const RESPONSE_UPDATE_PROVIDER = "PROVIDER/UPDATE/RESPONSE_PROVIDER";
export const ERROR_UPDATE_PROVIDER = "PROVIDER/UPDATE/ERROR_PROVIDER";

let initialState = {
  name: "",
  phone: "",
  email: "",

  loading: true,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ELEMENT:
      return { ...state, loading: true };
    case LOADED_ELEMENT:
      return { ...state, loading: false, element: action.payload };
    case REQUEST_UPDATE_ELEMENT:
      return { ...state, loading: true };
    case RESPONSE_UPDATE_PROVIDER:
      return { ...state, loading: false };
    case ERROR_UPDATE_PROVIDER:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export const update = element => dispatch => {
  dispatch({ type: REQUEST_UPDATE_ELEMENT });
  let location = { pathname: "/provider", updated: element.id };
  dispatch(replace(location));
  // api.put("provider", element)
  //     .then((response) => {
  //         debugger;
  //         dispatch({ type: RESPONSE_UPDATE_PROVIDER, payload: response.data })

  //         let location = { pathname: "/provider", updated: element.id }
  //         dispatch(replace(location));
  //         toast.success("proveedor Modificado")
  //     })
  //     .catch((error) => {
  //         dispatch({ type: ERROR_UPDATE_PROVIDER, error: error })
  //         toast.error("Error al modificar proveedor")
  //     })
};

export const load = id => (dispatch, state) => {
  dispatch({ type: LOAD_ELEMENT });
  dispatch({ type: LOADED_ELEMENT, payload: provider_factory() });
  // api.get(`/provider/${id}`)
  //     .then(res => {
  //         let order = res.data
  //         if (order) {
  //             dispatch({ type: LOADED_ELEMENT, payload: order })
  //         } else {
  //             dispatch(replace('/provider'));
  //             toast.warn("No se puede editar el proveedor seleccionado")
  //         }
  //     })
};

export const goBack = () => dispatch => {
  dispatch(replace("/provider"));
  toast.info("Edición cancelada");
};
