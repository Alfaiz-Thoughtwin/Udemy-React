import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="age">Age (Years)</label>
            <input type="number" name="age" id="age" />
            <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
