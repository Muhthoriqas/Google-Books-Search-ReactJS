import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white ">
      <div
        className="text-center p-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a
          className="text-white link"
          href="https://github.com/Muhthoriqas"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Thoriq AS
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
