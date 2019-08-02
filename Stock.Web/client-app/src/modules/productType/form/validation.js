import * as yup from "yup";
import "../../../common/helpers/YupConfig";

export default yup.object().shape({
  initials: yup.string().required(),
  description: yup.string().required()
});
