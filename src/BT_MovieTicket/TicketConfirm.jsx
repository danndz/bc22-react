import React from "react";

const TicketConfirm = ({ ticket }) => {
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Seats</th>
          <th>Seats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ticket.name}</td>
          <td>{ticket.numberOfSeat}</td>
          <td>{(ticket.seats || []).join(", ")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TicketConfirm;
