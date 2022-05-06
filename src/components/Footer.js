// const Footer= ()=>{
//    array= ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]
// }
// Footer.map({
//     UnorderedList = document.createElement("ul")
// })

import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.footerData.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
