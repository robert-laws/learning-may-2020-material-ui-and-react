import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, useScrollTrigger, Typography, Tabs, Tab, Button } from '@material-ui/core';

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
    height: '4em',
    margin: '5px 10px'
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

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar className={classes.toolbarFlex} disableGutters>
            <img className={classes.logo} alt='Blob Logo' src={logo} />
            <Typography variant="h6">
              Blob Development
            </Typography>
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Information" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.ToolbarMargin} />
    </>
  )
}

export default Header;