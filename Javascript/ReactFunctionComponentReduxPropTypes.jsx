import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const ReactFunctionComponentReduxPropTypes = (props) => {
  return <div></div>;
};

ReactFunctionComponentReduxPropTypes.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactFunctionComponentReduxPropTypes);
