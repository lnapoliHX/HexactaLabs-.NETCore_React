import api from "../../../common/api";

const initialState = {
  loading: false,
  types: []
};

const LOADING = "PRODUCT-TYPES_LOADING";
const SET = "PRODUCT-TYPES_SET";
const CREATE = "PRODUCT-TYPE_CREATE";
const REMOVE = "PRODUCT-TYPE_REMOVE";
const UPDATE = "PRODUCT-TYPE_UPDATE";

export const actionTypes = {
  LOADING,
  SET,
  CREATE,
  REMOVE,
  UPDATE
};

function handleLoading(state, { loading }) {
  return {
    ...state,
    loading
  };
}

function handleSet(state, { types }) {
  return { ...state, types: types.map(t => ({ ...t, id: `${t.id}` })) };
}

function handleNewProductType(state, { productType }) {
  if (!productType.id) {
    return state;
  }
  return state;
}

function handleRemove(state, { id }) {
  return {
    ...state,
    types: state.types.filter(type => type.id !== id)
  };
}

function handleUpdate(state, { producttype }) {
  return {
    ...state,
    types: state.types.reduce(
      (acc, type) =>
        type.id === producttype.id
          ? acc.concat([producttype])
          : acc.concat(type),
      []
    )
  };
}

const handlers = {
  [LOADING]: handleLoading,
  [SET]: handleSet,
  [CREATE]: handleNewProductType,
  [REMOVE]: handleRemove,
  [UPDATE]: handleUpdate
};

export default function reducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export function setLoading(status) {
  return {
    type: LOADING,
    loading: status
  };
}

export function setProductTypes(types) {
  return {
    type: SET,
    types
  };
}

export function fetchAll() {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .get("/producttype")
      .then(response => {
        dispatch(setProductTypes(response.data));
        return dispatch(setLoading(false));
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}

export function fetchById(id) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .get(`/producttype/${id}`)
      .then(response => {
        dispatch(setProductTypes(response.data));
        return dispatch(setLoading(false));
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}

// selectors
const base = state => state.productType.list;
export const getLoading = state => base(state).loading;
export const getProductTypes = state => base(state).types;
export const getById = (state, id) =>
  getProductTypes(state).find(type => type.id === id);
