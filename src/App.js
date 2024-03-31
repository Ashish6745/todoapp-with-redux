import React from "react";
import { Provider } from "react-redux";
import store from './store'
import Task from "./Task";
const App = () => {
  return (
    <Provider store={store}>
       <Task /> 
    </Provider>
  );
};
export default App;