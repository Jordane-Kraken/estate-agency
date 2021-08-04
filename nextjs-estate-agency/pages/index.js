import React from "react";
import Head from 'next/head';
import '../styles/Home.module.css'
import { Layout } from "../components/layout/layout";
import { Carousel } from "../components/carousel";
import api from "../auth/axios";
import {PropertyVip} from "../components/propertyVip";
import {PropertySection} from "../components/propertySection";
import {Features} from "../components/features";
import {MDBContainer} from "mdbreact";
import { MDBAnimation } from "mdbreact";

export default function Home({propertiesVip, properties}) {
  return (
    <Layout footer>
    <Carousel />
    <MDBAnimation type="fadeIn">
    <h1 className="text-center">Bienvenue sur AgenceImmob'</h1>
    <hr className="my-5"/>
    </MDBAnimation>
    <MDBContainer>
      <PropertyVip properties={propertiesVip} />
      <PropertySection properties={properties} />
      <Features />
    </MDBContainer>
    </Layout>
  )
}


export const getStaticProps = async() => {
  const {data : propertiesVip} = await api.get('/api/properties/vip');
  const {data} = await api.get('/api/properties?limit=6');
  const properties = data.data;

  return {
    props: {
      propertiesVip,
      properties
    }
  }
}