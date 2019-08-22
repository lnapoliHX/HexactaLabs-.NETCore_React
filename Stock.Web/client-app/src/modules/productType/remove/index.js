import { replace } from "connected-react-router";
import api from "../../../common/api";
import { setLoading, actionTypes } from "../list";
import { toast } from "react-toastify";

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
        toast.success("El tipo se eliminó con éxito");
        dispatch(success(id));
        dispatch(setLoading(false));
        return dispatch(replace("/product-type"));
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}
