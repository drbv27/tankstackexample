import { useQuery } from "@tanstack/react-query";

const API_URL = "https://685369980594059b23d0d9c7.mockapi.io/api/v1/users";

const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("error al consultar usuarios");
  return response.json();
};

const UsersList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <h2>Cargando info...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h1>Lista de usuarios desde MockAPI</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
