import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";

const initialState = {
  loading: false,
  all: []
};

/* Action Types */
const LOADING = "PRODUCTS/LOADING";
const LOAD = "PRODUCTS/LOAD";

/* Reducer */
function handleLoading(state, { loading }) {
  return {
    ...state,
    loading
  };
}

function handleLoad(state, { products }) {
  return {
    ...state,
    all: products
  };
}

const handlers = {
  [LOADING]: handleLoading,
  [LOAD]: handleLoad
};

export default function reducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

/* Actions */
export function loading(status) {
  return {
    type: LOADING,
    loading: status
  };
}

export function load(products) {
  return {
    type: LOAD,
    products
  };
}

export function getAll(params = {}) {
  return function(dispatch) {
    dispatch(loading(true));
    return api
      .get("/product", { params })
      .then(response => {
        dispatch(load(response.data));
        dispatch(loading(false));
      })
      .catch(error => {
        dispatch(loading(false));
        apiErrorToast(error);
      });
  };
}

/* Selectors */
export const getProducts = state => state.product.all;
export const getLoadingStatus = state => state.product.loading;
