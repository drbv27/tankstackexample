import { useState, useEffect } from "react";

const API_URL = "https://685369980594059b23d0d9c7.mockapi.io/api/v1/users";

const UsersConUseEffect = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Fallo al obtener los usuarios");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <h2>Cargando usuarios...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Mi usuarios desde MockAPI</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersConUseEffect;
