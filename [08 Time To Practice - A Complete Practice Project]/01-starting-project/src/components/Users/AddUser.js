import React from "react";
import "./AddUser.module.css";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={addUserHandler}>
        <div className="input">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="age" id="age" />
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
}

export default AddUser;
