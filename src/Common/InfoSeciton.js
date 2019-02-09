import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class InfoSection extends Component {
  render() {
    return (
      <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Introduction</h5>
              <p>
                This Graduation Indicator aims to help students(sophomore year or higher) to make their own academic plans for each term until they meet all CIS major requirements.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Resources</h5>
              <ul>
                <li>
                  <a href="https://cs.uoregon.edu/undergraduate/cis-major">CIS Major Overview</a>
                </li>
                <li>
                  <a href="https://cs.uoregon.edu/undergraduate/cis-major/cis-major-requirements#core">CIS Major Requirements</a>
                </li>
                <li>
                  <a href="https://cs.uoregon.edu/classes">CIS Classes</a>
                </li>
                <li>
                  <a href="http://catalog.uoregon.edu/arts_sciences/computerandinfoscience/#degreeplantext">Degree Plan</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            {new Date().getFullYear()} Copyright:{" "}
            <a href="https://cs.uoregon.edu/"> University of Oregon - Computer and Information Science </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default InfoSection;
