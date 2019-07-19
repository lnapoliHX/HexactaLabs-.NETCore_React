import api from "../../../common/api";
import { setLoading, actionTypes } from "../list";

/* Actions */
function success(producttype) {
  return {
    type: actionTypes.UPDATE,
    producttype
  };
}

export function update(producttype) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .put(`/producttype/${producttype.id}`, producttype)
      .then(() => {
        dispatch(success(producttype));
        return dispatch(setLoading(false));
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}
