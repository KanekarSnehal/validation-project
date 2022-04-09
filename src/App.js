import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";

function App() {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  return (
    <div className="App text-center">
      <Form userData={userData} setUserData={setUserData} />
      <Card userData={userData} setUserData={setUserData} />
    </div>
  );
}

export default App;
