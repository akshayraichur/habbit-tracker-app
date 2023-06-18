import { useReducer } from "react";
import { ACTION_TYPES, FORM_TYPES } from "../constants";

const initialState = {
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
      let db = [...action.payload.db];
      let selectedElm = db.find((item) => item.id === state.id);
      if (selectedElm) {
        selectedElm.name = state.name;
        selectedElm.repeat = state.repeat;
        selectedElm.goal = state.goal;
        selectedElm.time = state.time;
        selectedElm.date = state.date;
      }
      action.payload.setDB([...db]);
      return { ...initialState };
    }

    case ACTION_TYPES.LOAD: {
      let newState = { ...state, ...action.payload };
      return newState;
    }

    case ACTION_TYPES.CLEAR: {
      return { ...initialState };
    }

    case ACTION_TYPES.UPLOAD: {
      const setState = action.payload.setDB;

      setState((prevState) => [
        ...prevState,
        {
          ...state,
          id: Math.random().toString(),
          description: "Lorem ipsum dolor sit amet.",
          isArchive: false,
        },
      ]);

      return { ...state };
    }

    default: {
      return state;
    }
  }
};

const useFormData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useFormData;
