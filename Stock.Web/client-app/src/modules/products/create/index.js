import api from "../../../common/api";
import { goBack } from 'connected-react-router';
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { setLoading, ActionTypes } from "../list";
import { toast } from "react-toastify";

/* Actions */
function success(product) {
  return {
    type: ActionTypes.CREATE,
    product
  };
}

export function create(product) {
  return function (dispatch) {
    dispatch(setLoading(true));
    return api
      .post(`/product/`, product)
      .then((response) => {
        toast.success("El producto se creó con exito");
        dispatch(success(response.data));
        dispatch(setLoading(false));
        return dispatch(goBack());
      })
      .catch(error => {
        apiErrorToast(error);
        return dispatch(setLoading(false));
      });
  };
}
