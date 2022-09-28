import React from "react";
import "./SubmitForm.css";

export const SubmitForm = () => {
  return (
    <body>
      <div className="container">
        <form>
          <h1>Submit Article</h1>
          <input type="text" required placeholder="Title"></input>
          <input type="text" required placeholder="Journal Name"></input>
          <input type="number" required placeholder="Volume"></input>
          <input type="text" required placeholder="Pages"></input>
          <input type="text" required placeholder="DOI"></input>
          <input type="text" required placeholder="Practice"></input>
          <input type="text" required placeholder="Claim"></input>
          <input type="text" required placeholder="Research Type"></input>
          <input type="text" required placeholder="Author"></input>
          <input type="text" required placeholder="Description"></input>
          <input
            id="publishedDate"
            type="date"
            placeholder="Published Date"
            required
          ></input>
          <input type="text" required placeholder="Publisher"></input>
          <button>Submit Article</button>
        </form>
      </div>
    </body>
  );
};
