import React, { useState } from "react";
import Row from "./Row";
// import moment from "moment";
//console.log(fakeBookings)

//import Customer from "./Customer";
//import FakeBookings from "../data/fakeBookings.json";
//const results = { FakeBookings };
//console.log(results.FakeBookings);

const SearchResults = props => {
  return (
    <table class="table">
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
          return <Row booking={booking} />;
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
