import React, { useEffect } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
const rows = [];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  fixedHeight: {

    height: 240,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));


export default function RecentProductTable(props) {
  const ip = "13.127.18.137"
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [project, setProject] = React.useState([]);
  const[Build,setBuild]=React.useState([]);
  const[RejectBuild,setRejectBuild]=React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  useEffect(() => {
    async function fetchData() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/latest_versions/'
      const res = await fetch(proxyUrl + targetUrl)
      res
        .json()
        .then(res => {
          console.log(res);
          setProject(res);

        })
        .catch(err => setShow(err));
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/approved/'
      const res = await fetch(proxyUrl + targetUrl)
      res
        .json()
        .then(res => {
          console.log(res);
          setBuild(res);

        })
        .catch(err => setShow(err));
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/rejected/'
      const res = await fetch(proxyUrl + targetUrl)
      res
        .json()
        .then(res => {
          console.log(res);
          setRejectBuild(res);

        })
        .catch(err => setShow(err));
    }
    fetchData();
  }, []);
  
  const handleShowData = () => {
    setShowData(!showData);
  };
const preventDefault=()=>{
  props.props.history.push("/BuildData");
}
  
  return (
    <React.Fragment>
      <div style={{display:'flex',flexDirection:'row',padding:'2px',margin:'3px',justifyContent:"space-between"}}>
        <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
      <Title>Recent Builds</Title> <Typography color="textSecondary" className={classes.depositContext}></Typography>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Products</TableCell>
            <TableCell>Builds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {project.map(row => (
            <TableRow key={row.id}>

              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.version_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></Paper></Grid>
      <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}> <Title>Approved Builds</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Products</TableCell>
            <TableCell>Builds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Build.map(row => (
            <TableRow key={row.id}>

              <TableCell>{row.properties_dict.product_name}</TableCell>
              <TableCell>{row.properties_dict.version_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></Paper></Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}> <Title>Rejected Builds</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Products</TableCell>
            <TableCell>Builds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RejectBuild.map(row => (
            <TableRow key={row.id}>

              <TableCell>{row.properties_dict.product_name}</TableCell>
              <TableCell>{row.properties_dict.version_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></Paper></Grid></div>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Builds
        </Link>
      </div> */}
      
    </React.Fragment>
  );
}