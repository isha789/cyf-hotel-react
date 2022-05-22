import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setCustomerInfo] = useState(null);
  useEffect(() => {
    if (id > 0) {
      //fetch(`https://cyf-react.glitch.me/customers/${id} `)
      fetch(`https://cyf-react.glitch.me/delayed `)
        .then(response => response.json())
        .then(data => setCustomerInfo(data));
    }
  }, [id]);

  return (
    <div>
      {id && customerInfo
        ? `Customer profile ${customerInfo.id} ${
            customerInfo.email
          } is the customer vip: ${customerInfo.vip} ${
            customerInfo.phoneNumber
          }`
        : "loading"}
    </div>
  );

  //customers/${id}
};
export default CustomerProfile;
