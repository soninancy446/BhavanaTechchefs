import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import {getProductCount} from '../Services/ServiceNew'
import {getBuildsCount} from '../Services/ServiceNew'
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
export default function BuildsCard(props) {
  const [project, setProject] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);

  useEffect(() => {

    getBuildsCount().then((res)=>{
      console.log(res.clone().json())
return res.json()
    }).then((key)=>{
      console.log("key-->",key)
      console.log("key-->",key)
      setProject(key)
      console.log("key-->",project)
    })
  },[]);

 
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Number of Builds</Title>
      <Typography component="p" variant="h4">

      </Typography><span><h2>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
     
    </React.Fragment>
  );
}