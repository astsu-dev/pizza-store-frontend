import { ICategory } from "models";

enum CategoriesActionTypes {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  SET_CATEGORIES = "SET_CATEGORIES",
  SELECT_CATEGORY = "SELECT_CATEGORY",
}

interface FetchCategoriesStartAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES_START;
}

interface SetCategoriesAction {
  type: CategoriesActionTypes.SET_CATEGORIES;
  payload: ICategory[];
}

interface SelectCategoryAction {
  type: CategoriesActionTypes.SELECT_CATEGORY;
  payload: number;
}

type CategoriesAction =
  | FetchCategoriesStartAction
  | SetCategoriesAction
  | SelectCategoryAction;

const startCategoriesFetching = (): FetchCategoriesStartAction => {
  return {
    type: CategoriesActionTypes.FETCH_CATEGORIES_START,
  };
};

const setCategories = (categories: ICategory[]): SetCategoriesAction => {
  return {
    type: CategoriesActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

const selectCategory = (index: number): SelectCategoryAction => {
  return {
    type: CategoriesActionTypes.SELECT_CATEGORY,
    payload: index,
  };
};

export {
  startCategoriesFetching,
  selectCategory,
  setCategories,
  CategoriesActionTypes,
  CategoriesAction,
};
