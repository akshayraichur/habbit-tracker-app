import { createContext, useState } from "react";
import database from "../DB/database";
import PropTypes from "prop-types";
import useFormData from "./useFormData";

export const DbContext = createContext();

const DatabaseContextProvider = ({ children }) => {
  const [db, setDB] = useState(database);

  const [state, dispatch] = useFormData();

  return <DbContext.Provider value={{ db, setDB, state, dispatch }}>{children}</DbContext.Provider>;
};

DatabaseContextProvider.propTypes = {
  children: PropTypes.node,
};

export default DatabaseContextProvider;
