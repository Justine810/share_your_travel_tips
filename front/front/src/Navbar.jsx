import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Navbar.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <div className="navBar">
      <div className={classes.root}>
        <AppBar position="static" className="navEo">
          <Toolbar className="content-nav">
            <div>
              <a href="/">
                <img src="/logo-triptips.png" alt="logo TripTips" />
              </a>
            </div>
            <span className="desktop-link">
              <Link className="link" to="/tips">
                <Button>Tips</Button>
              </Link>
              <Link className="link" to="/continents">
                <Button>Continents</Button>
              </Link>
              <Link className="link" to="/categories">
                <Button>Catégories</Button>
              </Link>
              <Link className="link" to="/partage-ton-tip">
                <Button>Partage ton tip</Button>
              </Link>
            </span>

            <div
              className="burger"
              onClick={
                mobileNavActive ? () => setMobileNavActive(false) : () => setMobileNavActive(true)
              }
            >
              <img src={mobileNavActive ? '/close.svg' : '/burger.svg'} alt="menu burger" />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className={!mobileNavActive ? 'nav-mobile' : 'nav-mobile active'}>
        <Link className="link" to="Tips" onClick={() => setMobileNavActive(false)}>
          <Button>Tips</Button>
        </Link>
        <Link className="link" to="/continents" onClick={() => setMobileNavActive(false)}>
          <Button>Continents</Button>
        </Link>
        <Link className="link" to="/categories" onClick={() => setMobileNavActive(false)}>
          <Button>Catégories</Button>
        </Link>
        <Link className="link" to="/partage-ton-tip" onClick={() => setMobileNavActive(false)}>
          <Button>Partage ton tip</Button>
        </Link>
      </div>
    </div>
  );
}
