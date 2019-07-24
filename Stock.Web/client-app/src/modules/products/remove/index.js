import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { setLoading, ActionTypes } from "../list";
import { replace } from "connected-react-router";

/* Actions */
function success(id) {
  return {
    type: ActionTypes.REMOVE,
    id
  };
}

export function remove(id) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .delete(`/product/${id}`)
      .then(() => {
        dispatch(success(id));
        dispatch(setLoading(false));
        return dispatch(replace("/product"));
      })
      .catch(error => {
        apiErrorToast(error);
        return dispatch(setLoading(false));
      });
  };
}
