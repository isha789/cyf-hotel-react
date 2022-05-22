import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import Row from "./Row";

// import moment from "moment";
//console.log(fakeBookings)

//import Customer from "./Customer";
//import FakeBookings from "../data/fakeBookings.json";
//const results = { FakeBookings };
//console.log(results.FakeBookings);

const SearchResults = props => {
  const [customerId, setCustomerId] = useState(0);
  function changeCustomerId(id) {
    setCustomerId(id);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">First name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">nights to stay</th>
          </tr>
        </thead>

        <tbody>
          {props.results.map(booking => {
            return (
              <Row
                key={booking.id}
                changeCustomerId={changeCustomerId}
                booking={booking}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};
export default SearchResults;
