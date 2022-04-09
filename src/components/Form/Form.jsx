import { useState } from "react";

export const Form = ({ setUserData }) => {
  const [userInfo, setUserInfo] = useState({ name: "", age: "" });
  const { name, age } = userInfo;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInfo.name === "" || userInfo.age === "") {
      alert("Enter valid username and age");
      return;
    }
    if (userInfo.age <= 0) {
      alert("Age must be >0 ");
      setUserInfo((prevInfo) => {
        return { ...prevInfo, age: "" };
      });
      return;
    }
    setUserData((prevData) => {
      return [...prevData, userInfo];
    });
    setUserInfo({ name: "", age: "" });
  };
  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
  return (
    <form className="my-16" onSubmit={handleSubmit}>
      <label htmlFor="username" className="mx-16">
        UserName:
        <input
          type="text"
          id="name"
          class="input-md input-round"
          value={name}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="age">
        Age:
        <input
          type="number"
          id="age"
          class="input-md input-round"
          value={age}
          onChange={onChangeHandler}
        />
      </label>
      <button className="btn primary-btn width-fit-content" type="submit">
        Add User
      </button>
    </form>
  );
};
