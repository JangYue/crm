import React from 'react';
import {observer} from "mobx-react-lite"
import useMobxStore from "../src/store/index"
import Routes from "./router/index"
function App() {
  const count = useMobxStore.count;
  return (
    <div>
      <Routes />
    </div>
  );
}

export default observer(App);
