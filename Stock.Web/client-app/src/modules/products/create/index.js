import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { setLoading, ActionTypes } from "../list";

/* Actions */
function success(product) {
  return {
    type: ActionTypes.CREATE,
    product
  };
}

export function create(product) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .post(`/product/`, { body: product })
      .then(() => {
        // todo: para cuando la api devuelva un id
        // dispatch(success({ id: response.data.id, ...product }));
        dispatch(success(null));
        return dispatch(setLoading(false));
      })
      .catch(error => {
        apiErrorToast(error);
        return dispatch(setLoading(false));
      });
  };
}
