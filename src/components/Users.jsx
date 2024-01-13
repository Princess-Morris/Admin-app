import React from 'react';

const Users = () => {

    const user = {
      name: "Pet",
      email: "petson@gmail.com"
    }

  return (
    <div>
        <h1>Welcome {user.name}</h1>
    </div>
  );
}

export default Users;
