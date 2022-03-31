import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicCard from './card';
import Grid from '@mui/material/Grid';

ReactDOM.render(
  <React.StrictMode>
    <App />
   <div class="display">
      { <h1>Shop in style</h1> }
       <p text-color="secondary">With this shop hompeage template</p> 
    </div>
    <div class="cards">
    <Grid container direction="row" rowSpacing={3} columnSpacing={4} justifyContent="center">
      <Grid item >
      <BasicCard name="Fancy Product" price="$20-$30"/>
      </Grid>
      <Grid item>
      <BasicCard name="Special Item" price="$18"/>
      </Grid>
      <Grid item >
      <BasicCard name="Sale Item" price="$25"/>
      </Grid>
      <Grid item >
      <BasicCard name="Popular Item" price="$40"/>
      </Grid>
      <Grid item>
      <BasicCard name="Sale Item" price="$25"/>
      </Grid>
      <Grid item>
      <BasicCard name="Fancy Product" price="$120-$280"/>
      </Grid>
      <Grid item>
      <BasicCard name="Special Item" price="$18"/>
      </Grid>
      <Grid item>
      <BasicCard name="Popular Item" price="$40"/>
      </Grid>
      <Grid item >
      <BasicCard name="Fancy Product" price="$20-$30"/>
      </Grid>
    </Grid>
    </div>
    <footer class="footer">
      <p text-center>Copyright © Your Website 2022</p>
    </footer>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
