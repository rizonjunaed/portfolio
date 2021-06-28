import React from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <Grid container justify="space-between">
      <Grid item xs={4}>
        <Typography component="p" variant="button" className="link" align="center">
          <Button component={Link} to="./about-me" color="inherit">About Me</Button>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography component="p" variant="button" className="link" align="center">
          <Button component={Link} to="./contact" color="inherit">Contact</Button>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography component="p" variant="button" className="link" align="center">
          <Button component={Link} to="./blogs" color="inherit">Blogs</Button>
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default Footer;
