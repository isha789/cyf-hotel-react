import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    //console.log("page is loading")
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    const bookingsFiltered = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(bookingsFiltered);
  };

  return (
    <div className="App-content">
      {bookings.length > 0 ? (
        <div className="container">
          <Search search={search} />

          <SearchResults results={bookings} />
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;
