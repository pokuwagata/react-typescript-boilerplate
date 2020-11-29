import React, { useState, useEffect } from "react";

type Props = { id?: string };

const User: React.FC<Props> = (props) => {
  const [user, setUser] = useState(null);

  async function fetchUserData(id: string) {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return <p>loading</p>;
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
};

export default User;
