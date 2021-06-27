import React from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Footer = () => (
  <div className="footer">
    <Grid container justify="space-between">
      <Grid item xs={4}>
        <Typography component="p" variant="button" className="link" align="center">
          About Me
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography component="p" variant="button" className="link" align="center">
          Contact
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography component="p" variant="button" className="link" align="center">
          Blogs
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default Footer;
