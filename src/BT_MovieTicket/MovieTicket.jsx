// rfc - rafce

import React, { useState } from "react";
import SeatList from "./SeatList";
import TicketConfirm from "./TicketConfirm";
import TicketForm from "./TicketForm";

const MovieTicket = () => {
  // ticketInfo bao gồm: name, numberOfSeat, seats (danh sách ghế đang chọn)
  const [ticketInfo, setTicketInfo] = useState({});

  const handleStartSelecting = (values) => {
    setTicketInfo((state) => ({ ...state, ...values }));
  };

  const handleConfirmSelection = (seats) => {
    setTicketInfo((state) => ({ ...state, seats }));
  };

  return (
    <div className="movie-ticket">
      <div className="container">
        <h1 className="text-center">MOVIE SEAT SELECTION</h1>

        <div className="row">
          <div className="col-sm-8 mx-auto">
            <TicketForm onStartSelecting={handleStartSelecting} />

            <SeatList
              numberOfSeat={ticketInfo.numberOfSeat}
              onConfirmSelection={handleConfirmSelection}
            />

            <TicketConfirm ticket={ticketInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTicket;
