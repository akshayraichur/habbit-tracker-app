import { createContext, useEffect, useState } from "react";
import database from "../DB/database";
import PropTypes from "prop-types";
import useFormData from "./useFormData";

export const DbContext = createContext();

const DatabaseContextProvider = ({ children }) => {
  const [state] = useFormData();
  const [db, setDB] = useState(database);
  useEffect(() => {}, [state]);
  return <DbContext.Provider value={{ db, setDB }}>{children}</DbContext.Provider>;
};

DatabaseContextProvider.propTypes = {
  children: PropTypes.node,
};

export default DatabaseContextProvider;
