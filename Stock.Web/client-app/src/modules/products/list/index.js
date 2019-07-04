import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";

const initialState = {
  loading: false,
  all: []
};

/* Action Types */
const LOADING = "PRODUCTS_LOADING";
const SET = "PRODUCTS_SET";
export const ActionTypes = {
  LOADING,
  SET
};

/* Reducer handlers */
function handleLoading(state, { loading }) {
  return {
    ...state,
    loading
  };
}

function handleSet(state, { products }) {
  return {
    ...state,
    all: products
  };
}

const handlers = {
  [LOADING]: handleLoading,
  [SET]: handleSet
};

export default function reducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

/* Actions */
export function setLoading(status) {
  return {
    type: LOADING,
    loading: status
  };
}

export function setProducts(products) {
  return {
    type: SET,
    products
  };
}

export function fetchAll(params = {}) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .get("/product", { params })
      .then(response => {
        dispatch(setProducts(response.data));
        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        apiErrorToast(error);
      });
  };
}

export function fetchById(id) {
  return fetchAll({ id });
}

/* Selectors */
export function getProducts(state) {
  return state.product.list.all;
}
export function getLoading(state) {
  state.product.list.loading;
}
