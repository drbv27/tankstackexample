import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://685369980594059b23d0d9c7.mockapi.io/api/v1/users";

const createUser = async (newUser) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newUser.name, email: newUser.email }),
  });
  if (!response.ok) throw new Error("Fallo creando usuario");
  return response.json();
};

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  return <div>AddUser</div>;
};

export default AddUser;
