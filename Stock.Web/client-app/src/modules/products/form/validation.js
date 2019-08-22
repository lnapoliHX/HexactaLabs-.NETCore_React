import * as yup from "yup";
import "../../../common/helpers/YupConfig";

export default yup.object().shape({
  name: yup.string().required(),
  costPrice: yup.number().required(),
  salePrice: yup.number().required(),
  productTypeId: yup.string().required(),
  providerId: yup.string().required()
});
