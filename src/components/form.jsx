import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("error");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = { name, email, body, topic };
    console.log(users);
    nameCheck();
  };
  const nameCheck = (e) => {
    if (name < 3 || name > 16)
      <span>
        The name must be longer than 3 characters and less than 16 characters
      </span>;
  };

  return (
    <div className="create">
      <h1>Heellooo</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          placeholder="Enter your name.."
          value={name}
          onChange={(e) => {
            nameCheck(e);
            setName(e.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          required
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <label>Msg:</label>
          <textarea
            placeholder="tell us..."
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Topic:</label>
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="error">Error</option>
            <option value="something">Something</option>
          </select>
          <button type="submit">Send!</button>
          <p>{name}</p>
          <p>{email}</p>
          <p>{body}</p>
          <p>{topic}</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
