import React from "react";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(document.getElementById("myForm"));
    console.log(data.get("firstName"));
    console.log(data);
  };

  return (
    <div>
      <h1>Login</h1>

      <form id="myForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" name="firstName">
            First Name
          </label>
          <input type="text" id="firstName" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div>
          <label htmlFor="date_of_birth">Birth Date</label>
          <input type="date" id="date_of_birth" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="user_type">User Type</label>
          <select name="user_type" id="user_type">
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
