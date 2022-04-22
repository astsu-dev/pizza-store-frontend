import cartReducer from "./cart/reducer";
import categoriesReducer from "./categories/reducer";
import productReducer from "./products/reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export { RootState, store, AppDispatch };
