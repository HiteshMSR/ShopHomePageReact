import logo from './logo.svg';
import './App.css';
import BasicCard from './card';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import { Context } from './Context';
import Appbar from './Appbar';

export default function App() {
  const[buttonname,setButtonname] = React.useState("AddtoCart");
  const changeButtonName=()=>{
    if(buttonname="AddtoCart"){
      setButtonname(buttonname="Remove")
    }
  }

  const[items,setItems]=useState(0);
  const incitem=()=>{
      setItems(items+1)
  }
  const decitem=()=>{
      setItems(items-1)
  }
return(
  <>
  
  <Appbar items={items} />
  <div class="display">
  
      { <h1>Shop in style</h1> }
       <p text-color="secondary">With this shop hompeage template</p> 
    </div>
    <div class="cards">
    <Grid container direction="row" rowSpacing={3} columnSpacing={4} justifyContent="center">
      <Grid item >
      <BasicCard name="Fancy Product" price="$20-$30" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item>
      <BasicCard name="Special Item" price="$18" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item >
      <BasicCard name="Sale Item" price="$25" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item >
      <BasicCard name="Popular Item" price="$40" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item>
      <BasicCard name="Sale Item" price="$25" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item>
      <BasicCard name="Fancy Product" price="$120-$280" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item>
      <BasicCard name="Special Item" price="$18" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item>
      <BasicCard name="Popular Item" price="$40" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
      <Grid item >
      <BasicCard name="Fancy Product" price="$20-$30" btname={buttonname} incitem={incitem} decitem={decitem}/>
      </Grid>
    </Grid>
    </div>
    <footer class="footer">
      <p text-center>Copyright © Your Website 2022</p>
    </footer>

  </>
  )
}





