import React, { useState } from "react";

const TicketForm = ({ onStartSelecting }) => {
  const [values, setValues] = useState({ name: "", numberOfSeat: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onStartSelecting(values);
  };

  return (
    <div>
      <p>Fill The Required Details Below And Select Your Seats</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group mr-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mr-4">
          <label htmlFor="numberOfSeat">Number of Seat:</label>
          <input
            type="text"
            id="numberOfSeat"
            className="form-control"
            name="numberOfSeat"
            value={values.numberOfSeat}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Start Selecting</button>
      </form>
    </div>
  );
};

export default TicketForm;
