import React, { Component } from "react";
import moment from "moment";

class Customer extends Component {
  state = {
    classname: "blue" //// change classname
  };
  render() {
    return (
      <tr>
        <th scope="row">{this.props.customer.id}</th>
        <td>{this.props.customer.title}</td>
        <td>{this.props.customer.firstName}</td>
        <td>{this.props.customer.surname}</td>
        <td>{this.props.customer.email}</td>
        <td>{this.props.customer.roomId}</td>
        <td>{this.props.customer.checkInDate}</td>
        <td>{this.props.customer.checkOutDate}</td>
        <td>
          {moment(this.props.customer.checkOutDate).diff(
            this.props.customer.checkInDate,
            "days"
          )}
        </td>
      </tr>
    );
  }
}
export default Customer;
