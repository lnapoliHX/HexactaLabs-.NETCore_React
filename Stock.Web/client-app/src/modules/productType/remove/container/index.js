import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import { remove } from "..";
import ModalRemove from "../presentation";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    remove: () => dispatch(remove(ownProps.match.params.id)),
    goBack: () => dispatch(goBack())
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(ModalRemove);
