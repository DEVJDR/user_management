import React, { useState } from 'react';
import EditUserModal from './EditUserModal';

const UserList = ({ users, deleteUser, editUser }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const openEditModal = (userId) => {
    setEditModalOpen(true);
    setEditUserId(userId);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditUserId(null);
  };

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <div className="btn-group">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => openEditModal(user.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editModalOpen && (
        <EditUserModal
          user={users.find((user) => user.id === editUserId)}
          closeModal={closeEditModal}
          editUser={editUser}
        />
      )}
    </div>
  );
};

export default UserList;
