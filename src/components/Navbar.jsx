import React from 'react';
import { ArrowLeft, BookOpenText } from 'lucide-react'
import './navbar.css';

function Navbar({ page }) {
  return (
    <div className='navbar'>
      <a
        className="title-link"
        href="https://www.nimbial.com"
        target="_self"
        rel="noopener noreferrer"
      >
        <span className="title-text default"><BookOpenText size={15} strokeWidth={3} style={{marginRight: '7px', translate: '0px 2px'}}/>
          <span>Nimbial Docs</span>
        </span>
        <span className="title-text hover"><ArrowLeft size={15} strokeWidth={3} style={{marginRight: '3px', translate: '0px 2px'}}/>
          <span>Back to Home</span>
        </span>
      </a>

      <a className={'item' + ((page === undefined) ? ' active' : '')} href='/'>
        Nimbial
      </a>
      <a className={'item' + ((page === 'symphony') ? ' active' : '')} href='/symphony'>
        Symphony
      </a>
    </div>
  );
}

export default Navbar;
