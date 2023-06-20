import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setNameError('');
    setEmailError('');
    setPhoneError('');

    // Perform form validation
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    if (phone.trim() === '') {
      setPhoneError('Phone number is required');
      isValid = false;
    } else if (!validatePhone(phone)) {
      setPhoneError('Invalid phone number');
      isValid = false;
    }

    // Add user if form is valid
    if (isValid) {
      addUser({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  const validateEmail = (email) => {
    // Email validation logic
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Phone number validation logic (accepts only numbers)
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <span className="error">{nameError}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phoneError && <span className="error">{phoneError}</span>}
      </div>
      <button type="submit" className="btn btn-primary">
        Add User
      </button>
    </form>
  );
};

export default UserForm;
