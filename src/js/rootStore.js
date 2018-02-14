import { createStore } from "redux";

function tempReducer(){
    return null;
}

const rootStore = createStore(
    tempReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;