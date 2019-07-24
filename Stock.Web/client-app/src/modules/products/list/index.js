import { cloneDeep, pickBy } from "lodash";
import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { normalize } from "../../../common/helpers/normalizer";

const initialState = {
  loading: false,
  ids: [],
  byId: {},
  types: [
    { label: "Some Type", value: "1" },
    { label: "Some Type 2", value: "2" }
  ]
};

/* Action Types */
const LOADING = "PRODUCTS_LOADING";
const SET = "PRODUCTS_SET";
const SET_TYPES = "PRODUCTS_TYPES_SET";
const CREATE = "PRODUCTS_CREATE";
const UPDATE = "PRODUCTS_UPDATE";
const REMOVE = "PRODUCTS_REMOVE";

export const ActionTypes = {
  LOADING,
  SET,
  SET_TYPES,
  CREATE,
  UPDATE,
  REMOVE
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
    ids: products.map(product => product.id),
    byId: normalize(products)
  };
}

function handleSetTypes(state, { types }) {
  return {
    ...state,
    types
  };
}

function handleNewProduct(state, { product }) {
  if (!product) {
    // todo: cuando la api devuelva un id este if se borra
    return state;
  }
  return {
    ...state,
    ids: state.ids.concat([product.id]),
    byId: {
      ...state.byId,
      [product.id]: cloneDeep(product)
    }
  };
}

function handleUpdateProduct(state, { product }) {
  return {
    ...state,
    byId: { ...state.byId, [product.id]: cloneDeep(product) }
  };
}

function handleRemoveProduct(state, { id }) {
  return {
    ...state,
    ids: state.ids.filter(productId => productId !== id),
    byId: Object.keys(state.byId).reduce(
      (acc, productId) =>
        productId !== `${id}`
          ? { ...acc, [productId]: state.byId[productId] }
          : acc,
      {}
    )
  };
}

const handlers = {
  [LOADING]: handleLoading,
  [SET]: handleSet,
  [SET_TYPES]: handleSetTypes,
  [CREATE]: handleNewProduct,
  [UPDATE]: handleUpdateProduct,
  [REMOVE]: handleRemoveProduct
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
      .get("/producttype")
      .then(response => {
        dispatch(setProductTypes(response.data));
        return api
          .get("/product", { params: pickBy(params) })
          .then(response => {
            dispatch(setProducts(response.data));
            return dispatch(setLoading(false));
          });
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
        return dispatch(setLoading(false));
      })
      .catch(error => {
        apiErrorToast(error);
        return dispatch(setLoading(false));
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
        return dispatch(setLoading(false));
      })
      .catch(error => {
        apiErrorToast(error);
        return dispatch(setLoading(false));
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

export function getProductById(state, id) {
  return getProductsById(state)[id] || {};
}

export function getProductIds(state) {
  return base(state).ids;
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
  return base(state).types;
}
