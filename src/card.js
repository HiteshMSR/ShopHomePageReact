import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css'
import {items} from './Appbar';
import { Context } from './Context';
import { useContext, useState } from 'react'


export default function BasicCard(props) {

  const[add,stateadd]=useState(true)

  
    return (
     
      <Card sx={{ minWidth: 330}} class="idcard">
        <CardContent>
          <img src="https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004__480.jpg" width="350" height="300"></img>
          <h2 align="center">{props.name}</h2>
          <p align="center" fontsize="32"> {props.price}</p>
          {/* <Typography sx={{ fontSize: 22 }} color="text.secondary" align="center" gutterBottom>
            <br/>
            {props.price}
          </Typography> */}

        </CardContent>
        <CardActions>
          <div class="button">
        <Button variant="contained" onClick={()=>{add ? props.incitem() : props.decitem()
        stateadd(!add)  
      }}>{add ? "add to cart" : "removefromcart"}</Button>
        </div>
        </CardActions>
      </Card>
    );
  }
  