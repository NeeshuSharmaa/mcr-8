import { createContext, useContext, useReducer } from "react";
import { data } from "../db";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export default function DataContextProvider({ children }) {
  const initialState = {
    meets: data.meetups,
    search: "",
    eventType: "",
    rsvps: [],
  };
  const reducerFxn = (state, { type, payload }) => {
    switch (type) {
      case "SEARCH": {
        return { ...state, search: payload };
      }
      case "EVENT_TYPE": {
        if (payload === "none") {
          return { ...state, eventType: "" };
        } else {
          return { ...state, eventType: payload };
        }
      }
      case "RSVP": {
        return { ...state };
      }
      default: {
        return { ...state, meets: data.meetups, search: "", rsvps: [] };
      }
    }
  };
  const [state, dispatch] = useReducer(reducerFxn, initialState);

  const searchHandler = (arr) =>
    state.search
      ? arr.filter(
          ({ title, eventTags }) =>
            title.toLowerCase().includes(state.search.toLowerCase()) ||
            eventTags.some((tag) => tag.includes(state.search))
        )
      : arr;

  const eventTypeHandler = (arr) =>
    state.eventType
      ? state.eventType !== "both"
        ? arr.filter(
            ({ eventType }) =>
              eventType.toLowerCase() === state.eventType.toLowerCase()
          )
        : arr
      : arr;
  const filterTheMeets = (arr) => {
    const filterThroughFuncs = [searchHandler, eventTypeHandler];
    return filterThroughFuncs.reduce((acc, curr) => curr(acc), arr);
  };
  const values = {
    state,
    dispatch,
    filterTheMeets,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
