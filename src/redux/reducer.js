const INITIAL_STATE = {
  isOpen: false,
  options: {
    message: "",
    actionText: "",
    action: null,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "snackbar/show":
      return {
        ...state,
        isOpen: true,
        options: action.payload,
      };

    case "snackbar/close":
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
