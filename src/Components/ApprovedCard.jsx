import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import { makeStyles } from '@material-ui/core/styles'
import {getApproveBuildsCount} from '../Services/ServiceNew'
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
export default function ApprovedCard(props) {
 
  const [project, setProject] = React.useState([]);
  
  useEffect(() => {

    getApproveBuildsCount().then((res)=>{
      console.log(res.clone().json())
      return res.json()
    }).then((key)=>{
      setProject(key)
    })
  },[]);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Approved Builds</Title>
      <Typography component="p" variant="h4">

      </Typography><span><h2>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
      
    </React.Fragment>
  );
}