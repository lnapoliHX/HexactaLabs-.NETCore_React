import api from "../../../common/api";
import { setLoading, actionTypes } from "../list";
import { goBack } from "connected-react-router";
import { toast } from "react-toastify";

/* Actions */
function success(producttype) {
  return {
    type: actionTypes.UPDATE,
    producttype
  };
}

export function update(producttype) {
  return function (dispatch) {
    dispatch(setLoading(true));
    return api
      .put(`/producttype/${producttype.id}`, producttype)
      .then(() => {
        toast.success("El tipo de producto se editó con exito");
        dispatch(success(producttype));
        dispatch(setLoading(false));
        return dispatch(goBack());
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}
