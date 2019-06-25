import { replace } from "connected-react-router";
import { toast } from "react-toastify";

//import { api } from '../../shared/index';

export const LOAD_ELEMENT = "PROVIDER/CREATE/LOAD_CREATE_ELEMENT";
export const LOADED_ELEMENT = "PROVIDER/CREATE/LOADED_CREATE_ELEMENT";
export const REQUEST_CREATE_ELEMENT = "PROVIDER/CREATE/REQUEST_PROVIDER";
export const RESPONSE_CREATE_PROVIDER = "PROVIDER/CREATE/RESPONSE_PROVIDER";
export const ERROR_CREATE_PROVIDER = "PROVIDER/CREATE/ERROR_PROVIDER";

let initialState = {
  element: {
    name: "",
    phone: "",
    email: ""
  },

  loading: false,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_CREATE_ELEMENT:
      return { ...state, loading: true };
    case RESPONSE_CREATE_PROVIDER:
      return { ...state, loading: false };
    case ERROR_CREATE_PROVIDER:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export const create = element => dispatch => {
  dispatch({ type: REQUEST_CREATE_ELEMENT });
  dispatch({ type: RESPONSE_CREATE_PROVIDER });
  // api.post("provider", element)
  //     .then((response) => {
  //         dispatch({ type: RESPONSE_CREATE_PROVIDER, payload: response.data })
  //         let location = { pathname: "/provider", created: element.id }
  //         dispatch(replace(location));
  //         toast.success("proveedor Modificado")
  //     })
  //     .catch((error) => {
  //         dispatch({ type: ERROR_CREATE_PROVIDER, error: error })
  //         toast.error("Error al modificar proveedor")
  //     })
};

export const load = id => (dispatch, state) => {
  // dispatch({ type: LOAD_ELEMENT })
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
