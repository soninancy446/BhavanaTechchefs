import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import NotesIcon from '@material-ui/icons/Notes';
// import Dashboard from './Dashboard'

export default class ListItemsDrawer extends Component{
  constructor(props){
    super(props);
    this.state={
         isOpen:false
    }
  }
 render(){
    return(
      <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
         
        </ListItemIcon>
        <ListItemText primary="Dashboard"  onClick={() => this.props.Dashboard()}
                  button />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NotesIcon />
        </ListItemIcon>
        <ListItemText primary="Products" onClick={() => this.props.AllProduct()}
                  button
                  key="Products" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="About  Us"  onClick={() => this.props.AboutUs()}
                  button
                  key="About Us"/>
      </ListItem>
      <ListItem button>
      </ListItem>
      <ListItem button>
      </ListItem>
    </div>
    )
  }
}