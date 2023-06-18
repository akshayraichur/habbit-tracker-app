import { Input, Select, SimpleGrid } from "@chakra-ui/react";

import { ACTION_TYPES, FORM_TYPES } from "../constants";
import { useContext, useEffect } from "react";
import { DbContext } from "../store/DatabaseContext";

const FormFields = () => {
  const { state, dispatch } = useContext(DbContext);

  const handleInputChange = (e, component) => {
    dispatch({
      type: ACTION_TYPES.ADD,
      payload: {
        [component]: e.target.value,
      },
    });
  };

  return (
    <form>
      <label htmlFor="name">
        Name*
        <Input
          id="name"
          placeholder="Enter Name.."
          mt={2}
          variant="filled"
          required
          value={state.name}
          onChange={(e) => handleInputChange(e, FORM_TYPES.NAME)}
        />
      </label>

      <SimpleGrid spacing={2} templateColumns="repeat(auto-fill, minmax(150px, 1fr))" mt={2}>
        <label htmlFor="repeat-dropdown">
          Repeat
          <Select
            variant="filled"
            mt={2}
            placeholder="Duration"
            id="repeat-dropdown"
            onChange={(e) => handleInputChange(e, FORM_TYPES.REPEAT)}
            value={state.repeat}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </Select>
        </label>
        <label htmlFor="goal-dropdown">
          Goal
          <Select
            variant="filled"
            mt={2}
            placeholder="How many times?"
            id="goal-dropdown"
            onChange={(e) => handleInputChange(e, FORM_TYPES.GOAL)}
            value={state.goal}
          >
            <option value="Once">Once {state.repeat}</option>
            <option value="Twice">Twice {state.repeat}</option>
            <option value="Thrice">Thrice {state.repeat}</option>
          </Select>
        </label>

        <label htmlFor="time-dropdown">
          Time of the day
          <Select
            variant="filled"
            mt={2}
            placeholder="Time"
            id="time-dropdown"
            onChange={(e) => handleInputChange(e, FORM_TYPES.TIME)}
            value={state.time}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </Select>
        </label>

        <label htmlFor="date-dropdown">
          Start Date
          <Select
            variant="filled"
            mt={2}
            placeholder="When?"
            id="date-dropdown"
            onChange={(e) => handleInputChange(e, FORM_TYPES.DATE)}
            value={state.date}
          >
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="day-after">Day After Tomorrow</option>
          </Select>
        </label>
      </SimpleGrid>
    </form>
  );
};

export default FormFields;
