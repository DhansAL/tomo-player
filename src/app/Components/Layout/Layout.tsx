/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import { NavLink } from "react-router-dom";
import { Container } from '@material-ui/core';
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

  return (
      
      <Container  maxWidth="xl">
      <Header/>
     <Typography className={classes.root}>
       <Toolbar>
         <div style={{display:"flex", flexDirection:"row",color:"green"}}>
        <NavLink  to ="/" style={{marginRight:"10px"}}  color="inherit">
          OVERVIEW
      </NavLink>
      <NavLink  to ="/library" style={{marginRight:"10px"}}  color="inherit">
          LIBRARY
      </NavLink>
         <NavLink  to ="/settings" style={{marginRight:"10px"}} color="inherit">
          SETTINGS
      </NavLink> 
    </div>
    
   
  
      </Toolbar>
    </Typography>
    </Container>
      
  );
}
