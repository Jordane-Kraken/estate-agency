import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="rgba-red-light" className="font-medium pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="footer">AgenceImmob'</h5>
            <p className="footer">
            New York, 94126, United States
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 footer">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

