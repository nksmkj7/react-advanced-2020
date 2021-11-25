import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople(oldPeople => [...oldPeople, { ...person, id: Math.random() }]);
  }

  const [person, setPerson] = useState({ firstName: "", email: "" });
  const [people, setPeople] = useState([]);
  return <>
    <h1>controlled inputs</h1>
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor='firstName'>Name : </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />

      </div>
      <div className="form-control">
        <label htmlFor='email'>email : </label>
        <input
          type='text'
          id='email'
          name='email'
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
      </div>
      <button type='submit'>add person</button>
    </form>
    {people.map((person, index) => {
      const { id, firstName, email } = person;
      return (
        <div className='item' key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      );
    })}
  </>
};

export default ControlledInputs;
