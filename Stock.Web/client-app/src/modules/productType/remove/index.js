import { replace } from "connected-react-router";
import api from "../../../common/api";
import { setLoading, actionTypes } from "../list";

function success(id) {
  return {
    type: actionTypes.REMOVE,
    id
  };
}

export function remove(id) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .delete(`/producttype/${id}`)
      .then(() => {
        dispatch(success(id));
        dispatch(setLoading(false));
        return dispatch(replace("/product-type"));
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}
