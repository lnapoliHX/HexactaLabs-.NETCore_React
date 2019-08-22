import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { setLoading, ActionTypes } from "../list";
import { replace } from "connected-react-router";
import { toast } from "react-toastify";

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
        toast.success('Se eliminó el producto con éxito');
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
