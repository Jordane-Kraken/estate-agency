import React, { Component, useState } from "react";
import { MDBCollapse, MDBIcon } from "mdbreact";

const Collapse = ({titre, children}) => {

const [collapseID, setCollapseID] = useState('');

const toggleCollapse = collapseID => () => {
setCollapseID(prevState => (
  collapseID = prevState !== collapseID ? collapseID : ""
))
}

const styles = {
  collapse: {
    backgroundColor: "#FCC6C2",
    padding: 10,
    fontSize: 20
  },
  icon: {
    padding: 10,
  }
}

  return (
      <>
<div className="mt-4">
<div style={styles.collapse} onClick={toggleCollapse("basicCollapse")}>
{titre}
{
  collapseID && <MDBIcon icon="angle-down" style={styles.icon} className="float-right" />
}
{
  !collapseID && <MDBIcon icon="angle-up" style={styles.icon} className="float-right" />
}
</div>
</div>
        <MDBCollapse id="basicCollapse" isOpen={collapseID}>
          <p>
            {children}
          </p>
        </MDBCollapse>
      </>
    );
}

export default Collapse;