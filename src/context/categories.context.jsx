import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORY_ACTION_TYPE = {
  SET_CATEGORY_MAP: "SET_CATEGORY_MAP",
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPE.SET_CATEGORY_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};

const INITIAL_CATEGORIES_MAP = {
  categoriesMap: {},
};
export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_CATEGORIES_MAP
  );
  const setCategoriesMap = (categoryMap) => {
    dispatch({
      type: CATEGORY_ACTION_TYPE.SET_CATEGORY_MAP,
      payload: categoryMap,
    });
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
