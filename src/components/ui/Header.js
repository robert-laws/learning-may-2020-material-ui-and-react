import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, useScrollTrigger, Typography } from '@material-ui/core';

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
  toolbarFlex: {
    alignItems: 'flex-start'
  },
  logo: {
    height: '4em',
    margin: '5px 10px'
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.ToolbarMargin} />
    </>
  )
}

export default Header;