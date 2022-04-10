import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { pokeDetailsReducer } from "./Reducers";

const reducers = combineReducers({pokeDetailsReducer})

export function configureStore(): Store<any> {
    return createStore(reducers, applyMiddleware(thunk));
}

export type RootState = ReturnType<typeof reducers>