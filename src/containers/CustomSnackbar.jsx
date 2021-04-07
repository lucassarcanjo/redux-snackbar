import { Button, Snackbar } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "../redux/action";

const CustomSnackbar = ({
  anchorOrigin = { vertical: "top", horizontal: "center" },
  autoHideDuration = null,
}) => {
  const isOpen = useSelector((state) => state.isOpen);
  const { message, actionText, action } = useSelector((state) => state.options);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeSnackbar());

  const handleSnackClick = (e) => {
    action(e);
    handleClose();
  };

  const actionComponent = (
    <Button
      color="primary"
      size="small"
      onClick={handleSnackClick}
      style={{ fontWeight: 700 }}
    >
      {actionText}
    </Button>
  );

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={isOpen}
      message={message}
      action={actionComponent}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    />
  );
};

export default CustomSnackbar;
