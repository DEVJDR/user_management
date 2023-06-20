import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const newUser = {
      id: Date.now(),
      ...user,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const editUser = (userId, userData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, ...userData } : user))
    );
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
