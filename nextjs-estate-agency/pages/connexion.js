import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Layout } from "../components/layout/layout";
import useAuth from "../auth/context";
import { useRouter } from "next/router";

const FormPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const { login, isAuthenticated } = useAuth();

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(values.username, values.password);
  };

  return (
    <Layout >
      <MDBContainer>
            <form onSubmit={onSubmit}>
              <p className="h4 text-center my-4">Connexion</p>
              <div className="grey-text">
                <MDBInput
                  label="Nom d'utilisateur"
                  icon="user"
                  name="username"
                  group
                  type="text"
                  onChange={handleChange("username")}
                />
                <MDBInput
                  label="Mot de passe"
                  icon="lock"
                  name="password"
                  group
                  type="password"
                  validate
                  onChange={handleChange("password")}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="globalBtn">Connexion</button>
              </div>
            </form>
      </MDBContainer>
    </Layout>
  );
};

export default FormPage;
