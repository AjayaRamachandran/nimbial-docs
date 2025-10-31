import React from 'react';
import './homepage.css';

import Navbar from '@/components/Navbar';
import Content from '@/components/Content';

function HomePage({ page, id }) {
  return (
    <>
      <Navbar page={page}/>
      <Content page={page} id={id}/>
    </>
  );
}

export default HomePage;
