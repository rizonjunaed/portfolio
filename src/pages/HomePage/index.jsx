import React from 'react';
import './styles.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const MainPage = () => (
  <div>
    <Box mt={11} p={3}>
      <h1 className="title">Hello There!</h1>
      <p>Welcome to my blog. The world is moving rapidly in IT (Information Technology), Computer etc sector. People all over the world are using internet in almost every aspect of their life. Here, I will try my best to post about everyday computer hacks and strategies. I can be reached to my social platforms for any suggestions of a new blog post.</p>
    </Box>

    <Box mt={7} px={2} className="homepage-description">
      <Typography component="p">
        My intention for making the blog post is to give as much ideas as possible. So, that everyone gets the simple help they needed to make their life easy. I will try to continuosly post necessary blogs regarding software programming and simple computer uses. I already have some important blog posts which can be found
        {' '}
        <Typography component="span">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link to="/blogs">
            here
          </Link>
        </Typography>
        .
      </Typography>
    </Box>
  </div>
);

export default MainPage;
