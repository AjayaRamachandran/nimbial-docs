import React from 'react';
import './navbar.css';

function Navbar({ page }) {
  return (
    <>
      <div className='navbar'>
        <div className='title'>docs.nimbial.com</div>
        <a className={'item' + ((page === undefined) ? ' hl' : '')} href='/'>Nimbial</a>
        <a className={'item' + ((page === 'symphony') ? ' hl' : '')} href='/symphony'>Symphony</a>
      </div>
    </>
  );
}

export default Navbar;
