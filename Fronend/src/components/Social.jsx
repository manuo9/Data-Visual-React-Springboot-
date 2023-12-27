import React from 'react';
import Link from '@mui/material/Link';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/Github';
import '/src/assets/css/Social.css';


const Footer = () => {

  return (
    <footer className='footer'>
      <Link href="https://www.linkedin.com/in/manuprasad9" target="_blank">
        <LinkedinIcon className='socialIcon' />
      </Link>
      <Link href="https://www.twitter.com" target="_blank">
        <TwitterIcon  className='socialIcon'/>
      </Link>
      <Link href="https://github.com/manuo9" target="_blank">
        <GithubIcon className='socialIcon' />
      </Link>
    </footer>
  );
};

export default Footer;
