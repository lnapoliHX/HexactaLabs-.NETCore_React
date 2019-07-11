import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { normalize } from "../../../common/helpers/normalizer";

const initialState = {
  loading: false,
  all: [],
  byId: {},
  types: []
};

/* Action Types */
const LOADING = "PRODUCTS_LOADING";
const SET = "PRODUCTS_SET";
const SET_TYPES = "PRODUCTS_TYPES_SET";
export const ActionTypes = {
  LOADING,
  SET,
  SET_TYPES
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
    all: products.map(product => product.id),
    byId: normalize(products)
  };
}

function handleSetTypes(state, { types }) {
  return {
    ...state,
    types
  };
}

const handlers = {
  [LOADING]: handleLoading,
  [SET]: handleSet,
  [SET_TYPES]: handleSetTypes
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

export function setProductTypes(types) {
  return {
    type: SET_TYPES,
    types
  };
}

export function fetchAll(params = {}) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .get("/product", { params })
      .then(response => {
        dispatch(setProducts(response.data));
        return dispatch(setLoading(false));
      })
      .catch(error => {
        apiErrorToast(error);
        return dispatch(setLoading(false));
      });
  };
}

export function fetchById(id) {
  return fetchAll({ id });
}

export function fetchAllTypes() {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .get("/producttype")
      .then(response => {
        dispatch(setProductTypes(response.data));
        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        apiErrorToast(error);
      });
  };
}

export function fetchTypeById(id) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .get(`/producttype/${id}`)
      .then(response => {
        dispatch(setProductTypes(response.data));
        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        apiErrorToast(error);
      });
  };
}

/* Selectors */
function base(state) {
  return state.product.list;
}

export function getLoading(state) {
  return base(state).loading;
}

export function getProductsById(state) {
  return base(state).byId;
}

export function getProductIds(state) {
  return base(state).all;
}

export function makeGetProductsMemoized() {
  let cache;
  let value = [];
  return state => {
    if (cache === getProductsById(state)) {
      return value;
    }
    cache = getProductsById(state);
    value = Object.values(getProductsById(state));
    return value;
  };
}

export const getProducts = makeGetProductsMemoized();

export function getProductTypes(state) {
  return state.product.list.types;
}
