import { useRef } from "react";

export const Form = ({ setUserData }) => {
  const userName = useRef();
  const userAge = useRef();
  const userCollege = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = userName.current.value;
    const enteredAge = userAge.current.value;
    const enteredCollege = userCollege.current.value;

    if (enteredName === "" || enteredAge === "" || enteredCollege === "") {
      alert("Enter valid username and age");
      return;
    }
    if (enteredAge <= 0) {
      alert("Age must be >0 ");
      userAge.current.value = "";
      return;
    }
    setUserData((prevData) => {
      return [
        ...prevData,
        { name: enteredName, age: enteredAge, college: enteredCollege },
      ];
    });
    userName.current.value = "";
    userAge.current.value = "";
    userCollege.current.value = "";
  };

  return (
    <form className="my-16" onSubmit={handleSubmit}>
      <label htmlFor="username" className="mx-16">
        UserName:
        <input
          type="text"
          id="name"
          class="input-md input-round"
          ref={userName}
        />
      </label>
      <label htmlFor="age">
        Age:
        <input
          type="number"
          id="age"
          class="input-md input-round"
          ref={userAge}
        />
      </label>
      <label htmlFor="college">
        College:
        <input
          type="text"
          id="college"
          class="input-md input-round"
          ref={userCollege}
        />
      </label>
      <button className="btn primary-btn width-fit-content" type="submit">
        Add User
      </button>
    </form>
  );
};
