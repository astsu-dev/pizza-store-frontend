import { CategoriesAction, CategoriesActionTypes } from "./actions";
import { ICategory } from "models";

interface CategoriesState {
  categories: ICategory[];
  selectedCategoryIndex: number;
  loading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategoryIndex: 0,
  loading: false,
};

const categoriesReducer = (
  state = initialState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return { ...state, loading: true };
    case CategoriesActionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload, loading: false };
    case CategoriesActionTypes.SELECT_CATEGORY:
      return { ...state, selectedCategoryIndex: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
