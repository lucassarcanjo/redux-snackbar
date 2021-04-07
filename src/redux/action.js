export const showSnackbar = (data) => ({
  type: "snackbar/show",
  payload: data,
});

export const closeSnackbar = () => ({
  type: "snackbar/close",
});
