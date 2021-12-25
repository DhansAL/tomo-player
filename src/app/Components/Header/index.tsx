import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SignalWifi2BarLock from '@material-ui/icons/SignalWifi2BarLock';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TomoPlayer V2
          </Typography>
          <IconButton  className={classes.menuButton} color="inherit" aria-label="online status">
            <SignalWifi2BarLock/>
          </IconButton>
          <IconButton  className={classes.menuButton} color="inherit" aria-label="battery">
             3x<LocalFireDepartmentIcon/>
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
