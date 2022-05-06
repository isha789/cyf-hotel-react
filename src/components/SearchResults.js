import React from "react";

//import Customer from "./Customer";
import FakeBookings from "../data/fakeBookings.json";
const results = { FakeBookings };
console.log(results.FakeBookings);

const SearchResults = props => {
  return (
    <table class="table table-bordered">
      <thead class="table">
        <tr>
          <th scope="col">#</th>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights to stay</th>
        </tr>
      </thead>

      <tr>
        <th scope="row">1</th>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <th scope="row">2</th>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <th scope="row">3</th>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <th scope="row">4</th>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <th scope="row">5</th>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tbody>
        {/* {props.results.map(customer => {
          return <Customer customer={customer} />;
        })}   */}
      </tbody>
    </table>
  );
};
export default SearchResults;
