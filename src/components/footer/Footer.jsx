import React from 'react';
import './footer.css';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { results } = useSelector((state) => state.results);
  const { details } = useSelector((state) => state.details);

  if (!results) return <div></div>;

  return (
    <div className='footer'>
      All data provided by
      <a className='footer__rawg-link' href='https://rawg.io/'>
        rawg.io
      </a>
    </div>
  );
};

export default Footer;
