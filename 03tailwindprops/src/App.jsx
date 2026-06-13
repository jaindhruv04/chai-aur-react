import { useState } from "react";
import Card from "./components/Card";

let myObj = {
  username: "Dhruv",
  age: 19,
};

function App() {
  return (
    <div>
      <Card username="Chaiaurcode" btnText="Click me" />
      <Card username="Chaiaurcode" btnText="visit me" />
      <card />
    </div>
  );
}

export default App;
