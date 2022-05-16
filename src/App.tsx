import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreApp } from "./store";
import { decrement, increment, incrementBy } from "./store/slices/couter";

function App() {
  const { value } = useSelector((state: StoreApp) => state.counter);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    dispatch(increment());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>{value} is Counted</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch(incrementBy(5))}>
            Increment by
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
