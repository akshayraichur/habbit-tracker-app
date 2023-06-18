import { useReducer } from "react";
import { ACTION_TYPES, FORM_TYPES } from "../constants";

const initialState = {
  [FORM_TYPES.NAME]: "",
  [FORM_TYPES.REPEAT]: "",
  [FORM_TYPES.GOAL]: "",
  [FORM_TYPES.TIME]: "",
  [FORM_TYPES.DATE]: "",
};

const emptyState = {
  [FORM_TYPES.NAME]: "",
  [FORM_TYPES.REPEAT]: "",
  [FORM_TYPES.GOAL]: "",
  [FORM_TYPES.TIME]: "",
  [FORM_TYPES.DATE]: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      let newState = { ...state, ...action.payload };
      return newState;
    }

    case ACTION_TYPES.EDIT: {
      let newState = { ...state, ...action.payload };
      return newState;
    }

    case ACTION_TYPES.LOAD: {
      let newState = { ...state, ...action.payload };
      return newState;
    }

    case ACTION_TYPES.CLEAR: {
      return { ...emptyState };
    }

    case ACTION_TYPES.UPLOAD: {
      const setState = action.payload.setDB;

      setState((prevState) => [
        ...prevState,
        {
          ...state,
          id: Math.random().toString(),
        },
      ]);

      return { ...emptyState };
    }
  }
};

const useFormData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useFormData;
