import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, useScrollTrigger, Typography } from '@material-ui/core';

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
    ...theme.mixins.toolbar
  }
}))

const Header = props => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <Typography variant='h6'>
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