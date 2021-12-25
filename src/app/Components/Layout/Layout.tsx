/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import { Container, Grid } from '@material-ui/core';
import { Toolbar } from '@mui/material';

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
      
      <div style={{margin:0,padding:0}}>
      <Container  maxWidth="xl">
      <Header/>
     <Typography className={classes.root}>
       <Toolbar>
         <div style={{display:"flex", flexDirection:"row",color:"green"}}>
        <Link href="#" style={{marginRight:"10px"}} onClick={preventDefault} color="inherit">
          OVERVIEW
      </Link>
      <Link href="#"style={{marginRight:"10px"}} onClick={preventDefault} color="inherit">
          LIBRARY
      </Link>
         <Link href="#"style={{marginRight:"10px"}} onClick={preventDefault} color="inherit">
          SETTINGS
      </Link> 
    </div>
    
   
  
      </Toolbar>
    </Typography>
    </Container>
    </div>
    
  );
}
