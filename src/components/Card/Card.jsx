export const Card = ({ userData, setUserData }) => {
  return (
    <div>
      {userData &&
        userData.map((user) => (
          <li key={user}>
            {user.name} ({user.age} years old)
          </li>
        ))}
    </div>
  );
};
