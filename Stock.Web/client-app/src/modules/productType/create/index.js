import { toast } from "react-toastify";
import { setLoading, actionTypes } from "../list";
import api from "../../../common/api";

const success = productType => ({
  type: actionTypes.CREATE,
  productType
});

export function create(productType) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .post("/producttype", productType)
      .then(() => {
        toast.success("El nuevo tipo se creó con exito");
        dispatch(success(productType));
        return dispatch(setLoading(false));
      })
      .catch(() => {
        return dispatch(setLoading(false));
      });
  };
}
