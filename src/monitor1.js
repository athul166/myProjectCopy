import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Monitor2 from './Monitor2.js';

class Monitor extends Component {
  constructor()
  {
    super();

  }
  onClick()
  {
    alert(":lkl;klk");
  }
  render()
  {
    return(
    <div >

    <List style={{'width':'400','margin':'auto'}}>
      <ListItem >
    <p><label>JOB ID 1  </label><label > status  complted </label>
    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" float="right" xmlns="http://www.w3.org/2000/svg" onClick={this.onClick.bind(this)}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
    <path d="M0-.25h24v24H0z" fill="none"/>
</svg></p>
      </ListItem>
      <ListItem >
    <p><label>JOB ID 2 </label><label style={{'float':'right'}}>status  ioio </label></p>

      </ListItem>
        </List>



   </div>
 );
  }
}




export default Monitor;
