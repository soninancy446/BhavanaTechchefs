import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import {getRejectedBuildsCount} from '../Services/ServiceNew'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function RejectsCard(props) {
  const [project, setProject] = React.useState([]);

  useEffect(() => {
    getRejectedBuildsCount().then((res)=>{
      console.log(res.clone().json())
      return res.json()
    }).then((key)=>{
      setProject(key)
      console.log("rejectbuild",key)
    })
   
  }, []);
  
  const classes = useStyles();
  return (
    <>
      <Title>Rejected Builds</Title>
      <Typography component="p" variant="h4">

      </Typography><span><h2>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
    
    </>
  );
}