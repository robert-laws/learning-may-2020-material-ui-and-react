import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, useScrollTrigger, Typography, Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import logo from '../../assets/blob-logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  ToolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '0.75em'
  },
  logo: {
    height: '5em',
    margin: '5px 10px'
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  logoLink: {
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '35px',
    marginRight: '25px',
    height: '45px'
  }
}))

const Header = props => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (event, value) => {
    setValue(value)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }

  const handleClose = event => {
    setAnchorEl(null);
    setOpen(false);
  }

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if(window.location.pathname === '/services' && value !== 1) {
      setValue(1)
    } else if(window.location.pathname === '/information' && value !== 2) {
      setValue(2)
    } else if(window.location.pathname === '/about-us' && value !== 3) {
      setValue(3)
    } else if(window.location.pathname === '/contact-us' && value !== 4) {
      setValue(4)
    }
  }, [value])

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar className={classes.toolbarFlex} disableGutters>
            <Button component={Link} to='/' className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
              <img className={classes.logo} alt='Blob Logo' src={logo} />
            </Button>
            <Typography variant="h6">
              <Link to="/" className={classes.logoLink} onClick={() => setValue(0)}>Blob Development</Link>
            </Typography>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='primary'>
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup={anchorEl ? true : undefined} className={classes.tab} component={Link} onMouseOver={event => handleClick(event)} to="/services" label="Services" />
              <Tab className={classes.tab} component={Link} to="/information" label="The Information" />
              <Tab className={classes.tab} component={Link} to="/about-us" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact-us" label="Contact Us" />
            </Tabs> 
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
            <Menu id='simple-menu' anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}>
              <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/services'>Services</MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/custom-software'>Custom Software Development</MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/mobile-apps'>Mobile App Development</MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/websites'>Website Development</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.ToolbarMargin} />
    </>
  )
}

export default Header;