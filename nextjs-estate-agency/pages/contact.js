import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { Layout } from "../components/layout/layout";

const ContactPage = () => {
  return (
    <Layout footer>
      <div className="container">
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Nous contacter
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="5" className="lg-0 mb-4">
              <MDBCard>
                <MDBCardBody>
                  <div className="form-header globalColor accent-1">
                    <h3 className="mt-2">
                      <MDBIcon icon="envelope" /> Contact :
                    </h3>
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="user"
                      label="Prénom Nom"
                      iconClass="grey-text"
                      type="text"
                      id="form-name"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="envelope"
                      label="E-mail"
                      iconClass="grey-text"
                      type="text"
                      id="form-email"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="tag"
                      label="Sujet"
                      iconClass="grey-text"
                      type="text"
                      id="form-subject"
                    />
                  </div>
                  <div className="text-center">
                  <MDBBtn className="globalBtn">
                    Envoyer
                  </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="7">
              <div
                id="map-container"
                className="rounded z-depth-1-half map-container"
                style={{ height: "400px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                  title="This is a unique title"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                />
              </div>
              <br />
              <MDBRow className="text-center">
                <MDBCol md="4">
                  <MDBBtn tag="a" className="accent-1 globalColor">
                    <MDBIcon icon="map-marker-alt" />
                  </MDBBtn>
                  <p>New York, 94126</p>
                  <p className="mb-md-0">United States</p>
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn tag="a" className="accent-1 globalColor">
                    <MDBIcon icon="phone" />
                  </MDBBtn>
                  <p>+ 01 234 567 89</p>
                  <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn tag="a" className="accent-1 globalColor">
                    <MDBIcon icon="envelope" />
                  </MDBBtn>
                  <p>info@gmail.com</p>
                  <p className="mb-md-0">sale@gmail.com</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
