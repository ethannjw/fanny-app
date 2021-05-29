import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

// icons
import MenuIcon from '@material-ui/icons/Menu';



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
  loginButton: {
    
  },
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function ButtonAppBar() {
    const history = useHistory()
  const classes = useStyles();
    const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const handleOnClick = (text) => {
    switch(text) {
        case 'Home':
            history.push('/')
            return
        case 'Add New':
            history.push('/add-new')
            return
        case "Modify":
            history.push('/modify')
            return
        default:
            return
    }
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Add New', "Modify"].map((text, index) => (
          <ListItem button key={text} onClick={() => handleOnClick(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
        <SwipeableDrawer 
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            {list('top')}
        </SwipeableDrawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {'Fanny'}
          </Typography>
          <Button color="inherit" className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}