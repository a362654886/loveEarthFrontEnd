import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../src/container/MainPage";
import thunk from "redux-thunk";
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import AdminManagement from "./container/AdminMangement";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// store type??
const store: any = createStore(persistedReducer, applyMiddleware(thunk));
persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/mainPage" component={MainPage} />
        <Route path="/adminManagementPage" component={AdminManagement} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
