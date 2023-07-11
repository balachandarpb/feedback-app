import React from "react";

function Button({ children, type, version, isDisable }) {
  return (
    <button type="{type}" className={`btn btn-${version}`} disabled={isDisable}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: "primary",
  type: "submit",
  isDisable: false,
};
export default Button;
