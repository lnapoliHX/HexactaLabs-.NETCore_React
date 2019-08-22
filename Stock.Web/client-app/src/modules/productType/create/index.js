import { toast } from "react-toastify";
import { setLoading, actionTypes } from "../list";
import api from "../../../common/api";
import { goBack } from "connected-react-router";

const success = productType => ({
  type: actionTypes.CREATE,
  productType
});

export function create(productType) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .post("/producttype", productType)
      .then((response) => {
        toast.success("El nuevo tipo se creó con exito");
        dispatch(success(response.data));
        dispatch(setLoading(false));
        return dispatch(goBack());
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}
