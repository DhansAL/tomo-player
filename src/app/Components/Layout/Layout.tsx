/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export default function Layout() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
      <>
      <Header/>
     <Typography className={classes.root}>
     <Link href="#" onClick={preventDefault} color="inherit">
          OVERVIEW
      </Link>
     <Link href="#" onClick={preventDefault} color="inherit">
          LIBRARY
      </Link>
     <Link href="#" onClick={preventDefault} color="inherit">
          SETTINGS
      </Link>
    </Typography>
    </>
  );
}
