import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = ({children, footer}) => {
  return (
    <>
      <Header />
      {children}
      { 
        footer ? <Footer /> : false
      }
    </>
  )
}