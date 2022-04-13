export const Card = ({ userData, setUserData }) => {
  return (
    <div>
      {userData &&
        userData.map((user) => (
          <li key={user}>
            {user.name} is {user.age} years old and studying in college{" "}
            {user.college}
          </li>
        ))}
    </div>
  );
};
