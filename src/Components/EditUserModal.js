import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

const EditUserModal = ({ user, closeModal, editUser }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });

  const onSubmit = (data) => {
    editUser(user.id, data);
    reset(); // Reset the form fields
    closeModal();
  };

  const handleCloseModal = () => {
    reset(); // Reset the form fields
    closeModal();
  };

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      background: '#f4f4f4',
      border: '1px solid #ccc',
      borderRadius: '4px',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
    },
  };

  const inputStyles = {
    marginBottom: '10px',
    padding: '5px',
    width: '100%',
  };

  const buttonStyles = {
    marginRight: '10px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
  };

  return (
    <Modal isOpen={true} onRequestClose={handleCloseModal} style={modalStyles}>
      <h2 style={{ color: '#007bff' }}>Edit User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register('name', { required: true })} style={inputStyles} />
          {errors.name && <span className="error">Name is required</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            style={inputStyles}
          />
          {errors.email && <span className="error">Invalid email address</span>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input {...register('phone', { required: true, pattern: /^\d+$/ })} style={inputStyles} />
          {errors.phone && <span className="error">Invalid phone number</span>}
        </div>

        <button type="submit" style={buttonStyles}>Update User</button>
      </form>
      <button onClick={handleCloseModal} style={buttonStyles}>Cancel</button>
    </Modal>
  );
};

export default EditUserModal;
