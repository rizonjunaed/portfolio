import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    padding: '20px 0',
    backgroundImage: 'linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )',
  },
  toolBar: {
    padding: '0 17%',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar} variant="dense">
          <Typography variant="h6" className={classes.title}>
            <Link to="./" className="portfolio-title">
              Junaed&apos;s Portfolio
            </Link>
          </Typography>
          <Button component={Link} to="./about-me" color="inherit">About Me</Button>
          <Button component={Link} to="./contact" color="inherit">Contact</Button>
          <Button component={Link} to="./blogs" color="inherit">Blogs</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
